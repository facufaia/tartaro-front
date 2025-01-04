"use client";
import { useEffect } from "react";
import { useToastStore } from "@/stores/useToastStore";
import StickyNotifications from "@/components/modals/StickyNotifications";

export default function ToastProvider({ children }) {
  const { initializeNotifications } = useToastStore();

  useEffect(() => {
    initializeNotifications();
  }, []);

  return (
    <>
      {children}
      <StickyNotifications />
    </>
  );
}
