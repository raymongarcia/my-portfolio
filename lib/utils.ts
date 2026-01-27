import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the full asset URL based on the environment
 * @param filename - The asset filename (e.g., "b1.svg", "profilePic.png")
 * @returns The full URL in production, or just the path in local development
 */
export function getAssetUrl(filename: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  
  if (baseUrl) {
    // Production: return full URL with /my-portfolio prefix
    return `${baseUrl}/my-portfolio/${filename}`;
  } else {
    // Local: return just the path (files in public folder are served from root)
    return `/${filename}`;
  }
}