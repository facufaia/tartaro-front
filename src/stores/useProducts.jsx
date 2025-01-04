import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchProducts } from "@/lib/api";

export const useProductStore = create(
  persist(
    (set, get) => ({
      products: [],
      meta: null,
      filters: {},
      sorting: "asc",
      isLoading: false,
      error: null,

      // initFromURL: (searchParams) => {
      //   const filters = {};
      //   if (searchParams.has("category"))
      //     filters.category = searchParams.get("category");
      //   if (searchParams.has("color"))
      //     filters.color = searchParams.get("color");
      //   if (searchParams.has("size")) filters.size = searchParams.get("size");
      //   if (searchParams.has("sort"))
      //     set({ sorting: searchParams.get("sort") });
      //   set({ filters });
      // },

      syncWithURL: (router, filters) => {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.set(key, value);
        });
        if (get().sorting !== "asc") params.set("sort", get().sorting);
        router.push(`?${params.toString()}`, { scroll: false });
      },

      setInitialState: (initialData) => {
        set({
          products: initialData.data,
          meta: initialData.meta,
        });
      },

      setFilter: (router, type, value) => {
        const newFilters = { ...get().filters, [type]: value };
        set({ filters: newFilters });
        get().syncWithURL(router, newFilters);
      },

      fetchProducts: async () => {
        set({ isLoading: true });
        try {
          const res = await fetchProducts({
            ...get().filters,
            sort: get().sorting,
          });
          set({
            products: res.data,
            meta: res.meta,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error.message,
            isLoading: false,
          });
        }
      },
    }),
    {
      name: "product-store",
      partialize: (state) => ({
        filters: state.filters,
        sorting: state.sorting,
      }),
    }
  )
);
