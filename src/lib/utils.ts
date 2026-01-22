import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = "5515997023586";
export const DEFAULT_MESSAGE = "Olá, gostaria de saber mais sobre os chocolates.";

export const createWhatsappLink = (message: string = DEFAULT_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};


declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Função para rastrear cliques em botões específicos
 * @param buttonName Nome que aparecerá nos relatórios (ex: 'WhatsApp Home', 'Instagram Footer')
 */
export const trackClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_button', {
      'button_name': buttonName,
      'brand': 'Cacauê'
    });
  }
};