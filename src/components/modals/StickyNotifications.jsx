"use client";
import { useEffect } from "react";
import NewsLetter from "@/components/modals/NewsLetter";
import Cookies from "@/components/modals/Cookies";
import { useToastStore } from "@/stores/useToastStore";

export default function StickyNotifications() {
  const {
    showNewsletter,
    showCookies,
    setNotificationState,
    initializeNotifications,
  } = useToastStore();

  useEffect(() => {
    initializeNotifications();
  }, []);

  return (
    <div className="fixed bottom-4 left-4 space-y-4 z-50">
      {showNewsletter && (
        <NewsLetter
          setShowNewsletter={(value) =>
            setNotificationState("showNewsletter", value)
          }
        />
      )}
      {showCookies && (
        <Cookies
          setShowCookies={(value) => setNotificationState("showCookies", value)}
        />
      )}
    </div>
  );
}
