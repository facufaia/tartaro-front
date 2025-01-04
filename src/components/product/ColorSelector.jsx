import { getColorHex } from "@/lib/helpers";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ColorSelector({
  colors,
  selectedColor,
  onColorSelect,
  stock,
}) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Colors</h3>
      <div className="flex gap-2">
        <TooltipProvider>
          {colors.map((color, index) => {
            return (
              <Tooltip key={color}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => stock && onColorSelect(color, index)}
                    className={`w-8 h-8 rounded-full border-2 
                      ${
                        selectedColor === color
                          ? "border-primary"
                          : "border-transparent"
                      }
                      ${!stock && "opacity-30 cursor-not-allowed"}`}
                    style={{
                      backgroundColor: getColorHex(color),
                    }}
                    disabled={!stock}
                    title={color}
                  />
                </TooltipTrigger>
                {!stock && (
                  <TooltipContent>
                    <p>Not available in this color</p>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </div>
  );
}
