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
