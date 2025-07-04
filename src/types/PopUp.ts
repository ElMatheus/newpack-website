export type PopUpType = {
  type: "success" | "error" | "info";
  message: string;
  onClose?: () => void;
}

