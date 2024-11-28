import QRCode from 'qrcode';

declare global {
  interface Window {
    showQRCode: (event: MouseEvent) => Promise<void>;
    closeQRCode: () => void;
  }
}

window.showQRCode = async (event: MouseEvent) => {
  const button = event.currentTarget as HTMLButtonElement;
  const url = button.dataset.url;
  if (!url) return;

  const modal = document.getElementById('qrModal');
  const qrContainer = document.getElementById('qrcode');
  if (!modal || !qrContainer) return;

  try {
    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, url, {
      width: 256,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'H'
    });

    qrContainer.innerHTML = '';
    qrContainer.appendChild(canvas);
    modal.style.display = 'flex';
  } catch (err) {
    console.error('Failed to generate QR code:', err);
  }
};

window.closeQRCode = () => {
  const modal = document.getElementById('qrModal');
  if (!modal) return;
  modal.style.display = 'none';
};

document.getElementById('qrModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    window.closeQRCode();
  }
}); 