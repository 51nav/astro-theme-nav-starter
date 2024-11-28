export {};

declare global {
  interface Window {
    scrollToSection: (event: Event, href: string) => void;
    showQRCode: (event: MouseEvent) => Promise<void>;
  }
} 