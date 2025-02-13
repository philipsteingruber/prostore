import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimals(num: number): string {
  const [dollars, cents] = num.toString().split(".");

  return cents ? `${dollars}.${cents.padEnd(2, "0")}` : `${dollars}.00`;
}
