import { Categories } from "@/types/Categories"
import { Search, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Filter } from "@/types/Filter";

interface FacetedNavigationProps {
  categories: Categories;
  onFilterChange?: (filter: Filter) => void;
  initialFilter?: Filter | null;
}

export default function FacetedNavigation({ categories, onFilterChange, initialFilter }: FacetedNavigationProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(initialFilter?.category ?? null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(initialFilter?.subcategory ?? null);
  const [activeSubSubcategory, setActiveSubSubcategory] = useState<string | null>(initialFilter?.subSubcategory ?? null);
  const [inputValue, setInputValue] = useState<string>(initialFilter?.type == "search" ? initialFilter.value || "" : "");

  useEffect(() => {
    if (activeCategory && !activeSubcategory && !activeSubSubcategory) {
      onFilterChange?.({
        type: 'category',
        value: activeCategory,
        category: activeCategory,
        subcategory: null,
        subSubcategory: null,
      });
    } else if (activeCategory && activeSubcategory && !activeSubSubcategory) {
      onFilterChange?.({
        type: 'subcategory',
        value: activeSubcategory,
        category: activeCategory,
        subcategory: activeSubcategory,
        subSubcategory: null,
      });
    } else if (activeCategory && activeSubcategory && activeSubSubcategory) {
      onFilterChange?.({
        type: 'subSubcategory',
        value: activeSubSubcategory,
        category: activeCategory,
        subcategory: activeSubcategory,
        subSubcategory: activeSubSubcategory,
      });
    }
  }, [activeCategory, activeSubcategory, activeSubSubcategory]);

  const notifyFilterChange = (type: 'search' | 'category' | null, value?: string) => {
    if (type === 'search') {
      onFilterChange?.({
        type: 'search',
        value: value || null
      });
    } else if (type === null) {
      onFilterChange?.({
        type: null,
        value: null
      });
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
      setActiveSubcategory(null);
      setActiveSubSubcategory(null);
      notifyFilterChange(null);
    } else {
      setActiveCategory(categoryName);
      setActiveSubcategory(null);
      setActiveSubSubcategory(null);
    }
    setInputValue("");
  };


  const handleSubcategoryClick = (subcategoryName: string) => {
    if (activeSubcategory === subcategoryName) {
      setActiveSubcategory(null);
      setActiveSubSubcategory(null);
    } else {
      setActiveSubcategory(subcategoryName);
      setActiveSubSubcategory(null);
    }
  };

  const handleSubSubcategoryClick = (subSubcategoryName: string) => {
    if (activeSubSubcategory === subSubcategoryName) {
      setActiveSubSubcategory(null);
    } else {
      setActiveSubSubcategory(subSubcategoryName);
    }
  };

  const executeSearch = () => {
    const query = inputValue.trim();
    if (query) {
      setActiveCategory(null);
      setActiveSubcategory(null);
      setActiveSubSubcategory(null);
      notifyFilterChange('search', query);
    } else {
      notifyFilterChange(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };
  const handleSearchClick = () => {
    executeSearch();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  return (
    <section className="mt-7 mb-6.5 md:mb-9.5 md:mt-11.5 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
        <div className="md:order-2 flex flex-row gap-2 py-3 px-4.5 rounded-lg border-2 border-[var(--accent)] hover:border-[var(--primary)] transition-colors duration-300 cursor-text">
          <Search
            onClick={handleSearchClick}
            className="cursor-pointer hover:text-[var(--primary)] transition-colors duration-300"
          />
          <input value={inputValue} id="search" name="search" onChange={handleInputChange} onKeyPress={handleKeyPress} className="w-full outline-none " type="text" placeholder="Procurar..." />
        </div>
        <nav>
          <ul className="flex flex-row gap-4 md:gap-6">
            {categories.map((category) => (
              <li key={category.category} className="relative">
                <button
                  onClick={() => handleCategoryClick(category.category)}

                  className={`cursor-pointer hover:text-[var(--primary)] md:text-lg text-base font-medium transition-colors duration-300 flex items-center gap-1 ${activeCategory === category.category
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--accent)]/50'
                    }`}
                >
                  {category.category}
                  {category.subcategories.length > 0 && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${activeCategory === category.category ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Subcategorias */}
      {activeCategory && (
        <div className="animate-in slide-in-from-top-2 duration-300">
          <nav className="border-t border-[var(--accent)]/20 pt-4">
            <ul className="flex flex-wrap gap-3 md:gap-4">
              {categories
                .find(cat => cat.category === activeCategory)
                ?.subcategories.map((subcategory) => (
                  <li key={subcategory.name}>
                    <button
                      onClick={() => handleSubcategoryClick(subcategory.name)}
                      className={`cursor-pointer hover:text-[var(--primary)] text-sm md:text-base font-medium transition-colors duration-300 flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--accent)]/20 hover:border-[var(--primary)]/40 ${activeSubcategory === subcategory.name
                        ? 'text-[var(--primary)] border-[var(--primary)]/40 bg-[var(--primary)]/5'
                        : 'text-[var(--accent)]/70'
                        }`}
                    >
                      {subcategory.name}
                      {subcategory.subcategories && subcategory.subcategories.length > 0 && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${activeSubcategory === subcategory.name ? 'rotate-180' : ''
                            }`}
                        />
                      )}
                    </button>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      )}
      {/* Sub-subcategorias */}
      {activeCategory && activeSubcategory && (
        <div className="animate-in slide-in-from-top-2 duration-300">
          <nav className="border-t border-[var(--accent)]/10 pt-3">
            <ul className="flex flex-wrap gap-2 md:gap-3">
              {categories
                .find(cat => cat.category === activeCategory)
                ?.subcategories.find(sub => sub.name === activeSubcategory)
                ?.subcategories?.map((subSubcategory) => (
                  <li key={subSubcategory.name}>
                    <button
                      onClick={() => handleSubSubcategoryClick(subSubcategory.name)}
                      className={`cursor-pointer hover:text-[var(--primary)] text-xs md:text-sm font-medium transition-colors duration-300 px-2.5 py-1 rounded-md border hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 ${activeSubSubcategory === subSubcategory.name
                        ? 'text-[var(--primary)] border-[var(--primary)]/40 bg-[var(--primary)]/10'
                        : 'text-[var(--accent)]/60 border-[var(--accent)]/10'
                        }`}
                    >
                      {subSubcategory.name}
                    </button>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      )}
    </section>
  )
}