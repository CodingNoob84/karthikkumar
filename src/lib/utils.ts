import { PersonalInfo } from "@/data/contact-info";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = `${PersonalInfo.resumelink}`;
  const filename = `${PersonalInfo.name}_Resume`;
  link.download = `${filename}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
