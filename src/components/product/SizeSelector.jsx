import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SizeSelector({
  sizes,
  selectedSize,
  onSizeSelect,
  stock,
}) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Size</h3>
      <div className="flex gap-2">
        <TooltipProvider>
          {sizes.map((size) => {
            return (
              <Tooltip key={size}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => stock && onSizeSelect(size)}
                    className={`w-10 h-10 rounded-md border 
                      ${
                        selectedSize === size
                          ? "border-primary bg-primary text-foreground"
                          : "border-gray-200"
                      }
                      ${
                        !stock &&
                        "bg-transparent border-foreground opacity-30 cursor-not-allowed"
                      }`}
                    disabled={!stock}
                  >
                    {size.toUpperCase()}
                  </button>
                </TooltipTrigger>
                {!stock && (
                  <TooltipContent>
                    <p>Not available in this size</p>
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
