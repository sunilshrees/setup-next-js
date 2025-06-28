import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  if (!name) return "";

  // Split the name into an array of words
  const words = name.trim().split(/\s+/);

  // Map each word to its first letter and join them
  const initials = words.map((word) => word[0].toUpperCase()).join("");

  // Return only the first and last letters of the initials
  return initials.length > 1
    ? `${initials[0]}${initials[initials.length - 1]}`
    : initials;
}

export function truncateString(sentence: string, maxLength: number) {
  if (sentence?.length <= maxLength) {
    return sentence;
  }
  return sentence?.slice(0, maxLength) + "...";
}

export const checkDiscountCommission = (item: any) => {
  if (item.discount !== 0 && item.commission !== 0) {
    return "Both";
  } else if (item.commission === 0) {
    return "Discount";
  } else if (item.discount === 0) {
    return "Commission";
  }
  return "N/A";
};
