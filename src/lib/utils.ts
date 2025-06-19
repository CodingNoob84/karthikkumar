import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Alex_Johnson_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
