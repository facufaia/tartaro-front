import { create } from "zustand";
import { persist } from "zustand/middleware";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;
const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

export const useToastStore = create(
  persist(
    (set, get) => ({
      toasts: [],
      hasAcceptedCookies: false,
      hasSubscribed: false,
      showNewsletter: false,
      showCookies: false,
      toastTimeouts: new Map(),

      addToast: (props) => {
        const id = genId();
        set((state) => ({
          toasts: [{ ...props, id, open: true }, ...state.toasts].slice(
            0,
            TOAST_LIMIT
          ),
        }));

        const timeout = setTimeout(() => {
          get().removeToast(id);
        }, TOAST_REMOVE_DELAY);

        get().toastTimeouts.set(id, timeout);
        return id;
      },

      updateToast: (id, props) => {
        set((state) => ({
          toasts: state.toasts.map((t) =>
            t.id === id ? { ...t, ...props } : t
          ),
        }));
      },

      dismissToast: (toastId) => {
        set((state) => ({
          toasts: state.toasts.map((t) =>
            t.id === toastId ? { ...t, open: false } : t
          ),
        }));
        get().removeToast(toastId);
      },

      removeToast: (toastId) => {
        const timeout = get().toastTimeouts.get(toastId);
        if (timeout) clearTimeout(timeout);
        get().toastTimeouts.delete(toastId);

        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== toastId),
        }));
      },

      setNotificationState: (key, value) => {
        set({ [key]: value });
      },

      initializeNotifications: () => {
        const { hasAcceptedCookies, hasSubscribed } = get();

        if (!hasAcceptedCookies) {
          set({ showCookies: true });
        }

        if (!hasSubscribed) {
          setTimeout(() => {
            set({ showNewsletter: true });
          }, 1000);
        }
      },
    }),
    {
      name: "toast-storage",
      partialize: (state) => ({
        hasAcceptedCookies: state.hasAcceptedCookies,
        hasSubscribed: state.hasSubscribed,
      }),
    }
  )
);
