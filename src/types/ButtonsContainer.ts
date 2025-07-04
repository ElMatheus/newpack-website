export type ButtonsContainer = {
  button_1: {
    href?: string;
    link?: () => void;
    text: string;
    disabled?: boolean;
  };
  button_2: {
    href?: string;
    link?: () => void;
    text: string;
    disabled?: boolean;
  } | null;
};