"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useMemo } from "react";
import map from "@/lib/map.json";

export default function USAMap({ shippingCosts }) {
  const { theme } = useTheme();
  const [tooltipContent, setTooltipContent] = useState(null);

  const shippingMap = useMemo(() => {
    const map = new Map();
    shippingCosts.forEach((item) => {
      map.set(item.state, {
        cost:
          item.shipping_cost === 0
            ? "Free"
            : `$${item.shipping_cost.toFixed(2)}`,
        time: `${item.delivery_time - 1}-${item.delivery_time} days`,
      });
    });
    return map;
  }, [shippingCosts]);

  const getShippingInfo = (stateCode) => {
    return shippingMap.get(stateCode) || shippingMap.get("default");
  };

  const isHighlightedState = (stateCode) => {
    return shippingMap.has(stateCode) && stateCode !== "default";
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <TooltipProvider>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={map}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateCode = geo.properties.postal;
                const shippingInfo = getShippingInfo(stateCode);

                return (
                  <Tooltip key={geo.rsmKey}>
                    <TooltipTrigger asChild>
                      <Geography
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent({
                            name: geo.properties.name,
                            ...shippingInfo,
                          });
                        }}
                        onMouseLeave={() => {
                          setTooltipContent(null);
                        }}
                        style={{
                          default: {
                            fill: isHighlightedState(stateCode)
                              ? "hsl(var(--primary))"
                              : theme === "dark"
                              ? "hsl(var(--muted))"
                              : "hsl(var(--background))",
                            stroke: "hsl(var(--primary))",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          hover: {
                            fill: "hsl(var(--primary))",
                            stroke: "hsl(var(--primary))",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                        }}
                      />
                    </TooltipTrigger>
                    {tooltipContent && (
                      <TooltipContent className="text-sm">
                        <p className="font-semibold">{tooltipContent.name}</p>
                        <p>Shipping: {tooltipContent.cost}</p>
                        <p>Delivery: {tooltipContent.time}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </TooltipProvider>
    </div>
  );
}
