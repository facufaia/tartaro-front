import { useCartStore } from "@/stores/useCart";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default function ItemList() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={`${item.id}-${item.color}-${item.size}`}
          className="flex flex-col"
        >
          <div className="flex justify-between text-sm">
            <span className="flex-1">
              {capitalizeFirstLetter(item.name)} -{" "}
              {capitalizeFirstLetter(item.color)}, {item.size}
              <span className="text-gray-500"> x{item.quantity}</span>
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
          <div className="text-xs text-gray-500">
            ${item.price.toFixed(2)} each
          </div>
        </div>
      ))}
    </div>
  );
}
