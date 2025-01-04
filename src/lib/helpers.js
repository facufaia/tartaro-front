import { colorMap } from "@/lib/constants";

// Helper function to convert color names to hex codes
export function getColorHex(color) {
  return colorMap[color.toLowerCase()] || color;
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
