import { Product } from "@/types/Product"
import ProductFeature from "../productFeature"
import { useEffect, useState } from "react";
import Image from "next/image";

export function ProductCard({ photo, name, feature, feature2, category, isSale }: Product) {
  const [productFeatures, setProductFeatures] = useState<string[]>([]);
  const [imageLoading, setImageLoading] = useState(true);

  const baseFeatures = [
    "Alta qualidade",
    "Suporte técnico especializado",
    "Entrega rápida",
    "Adaptamos o produto às suas preferências",
    "Ótima disponibilidade em estoque",
    "Rende muito",
  ];

  const colors = ["amarelo", "amarela", "azul", "preto", "preta", "grafite", "laranja", "verde", "vermelho", "vermelha", "branco", "branca", "cinza", "prata"];
  const cutKeywords = ['borracha', 'expanflex', 'puxador', 'placa', 'hexagonal', 'perfil'];

  const extractShoreA = (text: string): number | null => {
    const shoreAMatch = text.match(/(\d+)\s*shore\s*a/i);
    return shoreAMatch ? parseInt(shoreAMatch[1]) : null;
  };

  const hasColor = (name: string): boolean => {
    return colors.some(color => name.toLowerCase().includes(color));
  };

  const hasCutKeyword = (name: string): boolean => {
    return cutKeywords.some(keyword => name.toLowerCase().includes(keyword));
  };

  const generateFeatures = (): string[] => {
    const features: string[] = [];

    const featureShoreA = feature ? extractShoreA(feature) : null;
    const feature2ShoreA = feature2 ? extractShoreA(feature2) : null;
    const shoreAValue = featureShoreA || feature2ShoreA;

    if (shoreAValue !== null) {
      if (shoreAValue > 45) {
        features.push("Composição firme e resistente");
      } else {
        features.push("Maciez que se adapta perfeitamente");
      }
    }

    if (hasColor(name)) {
      features.push("Disponível em diversas cores");
    }

    if (hasCutKeyword(name)) {
      features.push("Corte preciso e limpo");
    }

    const targetCount = Math.random() < 0.5 ? 3 : 4;
    const remainingCount = targetCount - features.length;

    if (remainingCount > 0) {
      const shuffledBase = [...baseFeatures].sort(() => Math.random() - 0.5);
      features.push(...shuffledBase.slice(0, remainingCount));
    }

    return features;
  };

  useEffect(() => {
    setProductFeatures(generateFeatures());
  }, [name, feature, feature2]);

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[var(--primary)]/40 transform hover:-translate-y-3 hover:scale-[1.02] relative flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 md:h-72">
        {photo ? (
          <div className="w-full h-full relative">
            <Image
              src={photo}
              alt={`imagem do produto ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoading ? "blur-sm" : "blur-0"
                }`}
              onLoad={() => setImageLoading(false)}
              priority={false}
              loading="lazy"
            />
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full relative">
            <Image
              src="/not-found-image.png"
              alt={`imagem do produto ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={false}
              loading="lazy"
            />
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[var(--primary)] backdrop-blur-md rounded-full shadow-lg">
            {category.replace('_', ' ').toUpperCase()}
          </span>
        </div>

        {/* Quality Badge */}
        {/* <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
            <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div> */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        {/* Product Name */}
        <div className="space-y-1">
          <h3 className="font-bold text-xl text-[var(--accent)] line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300">
            {name}
          </h3>
          <div className="w-12 h-0.5 bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Specifications */}
        {feature && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--secondary)]">Especificação técnica:</span>
            </div>
            <p className="text-base text-[var(--accent)] leading-relaxed pl-6">
              {feature}
            </p>
            {feature2 && (
              <p className="text-base text-[var(--accent)] leading-relaxed pl-6">
                {feature2}
              </p>
            )}
          </div>
        )}

        {/* Product Features */}
        <div className="space-y-2">
          {productFeatures.map((featureName, index) => (
            <ProductFeature key={index} name={featureName} />
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            {
              isSale ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-[var(--secondary)] font-medium">
                      Em oferta
                    </span>
                  </div>
                </div>
              ) : (
                <div />
              )
            }

            <div className="flex items-center space-x-2">
              {/* <button className="p-2 text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-full transition-colors duration-200 group/fav">
                <svg className="w-5 h-5 group-hover/fav:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button> */}

              <button className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[var(--primary)] hover:bg-[var(--secondary)] rounded-lg transition-all duration-200 group/btn transform hover:scale-105">
                Ver detalhes
                <svg
                  className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>

  )
}