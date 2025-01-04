"use client";

import { useRouter } from "next/navigation";
import { useProductStore } from "@/stores/useProducts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { capitalizeFirstLetter } from "@/lib/helpers";

export default function FilterBar({ categories, atributes, initialFilters }) {
  const router = useRouter();
  const filters = useProductStore((state) => state.filters);
  const setFilter = useProductStore((state) => state.setFilter);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  const handleFilterChange = (type, value) => {
    setFilter(router, type, value === "null" ? "" : value);
    fetchProducts();
  };

  const clearFilters = () => {
    atributes.forEach((attr) => {
      setFilter(router, attr.name, "");
    });
    setFilter(router, "category", "");
    fetchProducts();
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4">
        {/* Category Filter */}
        <Select
          value={filters.category || "null"}
          onValueChange={(value) => handleFilterChange("category", value)}
        >
          <SelectTrigger className="w-[180px] duration-200 ease-in-out transition-colors hover:border-primary outline-none focus-visible:ring-0 focus-within:border-muted">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="border-primary">
            <SelectItem value="null">All Categories</SelectItem>
            {categories?.map((category) => (
              <SelectItem
                key={category.id}
                value={category.name}
                className="specialHover"
              >
                {capitalizeFirstLetter(category.name)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Dynamic Attribute Filters */}
        {atributes?.map((attribute) => (
          <Select
            key={attribute.id}
            value={filters[attribute.name] || "null"}
            onValueChange={(value) => handleFilterChange(attribute.name, value)}
          >
            <SelectTrigger className="w-[180px] duration-200 ease-in-out transition-colors hover:border-primary focus:ring-0 focus-within:border-primary">
              <SelectValue
                placeholder={
                  attribute.name.charAt(0).toUpperCase() +
                  attribute.name.slice(1)
                }
              />
            </SelectTrigger>
            <SelectContent className="border-primary">
              <SelectItem value="null">All {attribute.name}s</SelectItem>
              {attribute.atributes_values.map((value) => (
                <SelectItem
                  key={value.id}
                  value={value.value}
                  className="specialHover"
                >
                  {capitalizeFirstLetter(value.value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}

        <Button
          variant="outline"
          onClick={clearFilters}
          className="hover:border-primary hover:text-primary hover:bg-transparent transition-colors duration-200"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
