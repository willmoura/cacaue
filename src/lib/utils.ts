import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = "5511999999999"; // Placeholder
export const DEFAULT_MESSAGE = "Olá, gostaria de saber mais sobre a Cacauê.";

export const createWhatsappLink = (message: string = DEFAULT_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
