import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      discount: 0,
      subtotal: 0,

      setDiscount: (percentaje) => {
        set({ discount: percentaje });
        set({ total: get().subtotal * percentaje });
      },

      clearDiscount: () => set({ discount: 0 }),

      calculateTotal: () => {
        const subtotal = get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        set({ subtotal });
        set({ total: get().subtotal - get().discount });
      },

      // Add item to cart
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.id === product.id &&
              item.color === product.color &&
              item.size === product.size
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item === existingItem
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return { items: [...state.items, product] };
        }),

      // Remove item from cart
      removeFromCart: (product) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.id === product.id &&
                item.color === product.color &&
                item.size === product.size
              )
          ),
        })),

      // Update item quantity
      updateQuantity: (product, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === product.id &&
            item.color === product.color &&
            item.size === product.size
              ? { ...item, quantity }
              : item
          ),
        })),

      // Clear cart
      clearCart: () => set({ items: [] }),

      // Calculate total
      getTotal: () => {
        const items = get().items;
        const amount = items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        return amount;
      },
    }),
    {
      name: "cart-storage", // unique name for localStorage
      getStorage: () => localStorage,
    }
  )
);
