export {};

declare global {
  interface Window {
    scrollToSection: (event: Event, href: string | null) => void;
    showQRCode: (event: MouseEvent) => Promise<void>;
    closeQRCode: () => void;
  }
} 