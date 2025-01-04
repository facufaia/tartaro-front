import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const cookieTypes = [
  {
    id: "essential",
    name: "Essential",
    description: "Required for the website to function properly",
    required: true,
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Help us understand how visitors interact with our website",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Used to deliver personalized advertisements",
  },
];

export default function Cookies({ setShowCookies }) {
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const { toast } = useToast();

  const handleCookieToggle = (cookieId) => {
    if (cookieId === "essential") return; // Cannot disable essential cookies
    setCookiePreferences((prev) => ({
      ...prev,
      [cookieId]: !prev[cookieId],
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(cookiePreferences)
    );
    localStorage.setItem("hasAcceptedCookies", "true");
    setShowCookies(false);
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated",
    });
  };

  const handleCookiesAccept = () => {
    localStorage.setItem("hasAcceptedCookies", "true");
    setShowCookies(false);
  };

  const handleClose = () => {
    setShowCookies(false);
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg border w-[448px] animate-fade-in-right">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Cookie Settings</h3>
        <button onClick={() => setShowCookies(false)}>
          <X className="h-4 w-4 hover:text-primary transition-colors duration-200 ease-in-out" />
        </button>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your browsing experience and analyze our
          traffic. Please choose your preferences below.
        </p>

        {showSettings ? (
          <div className="space-y-4">
            {cookieTypes.map((cookie) => (
              <div
                key={cookie.id}
                className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg"
              >
                <Switch
                  checked={cookiePreferences[cookie.id]}
                  onCheckedChange={() => handleCookieToggle(cookie.id)}
                  disabled={cookie.required}
                />
                <div>
                  <p className="font-medium">{cookie.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {cookie.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-col gap-2">
          <Button
            onClick={() => setShowSettings(!showSettings)}
            variant="outline"
            size="sm"
            className={`hover:border-primary transition-colors duration-200 ease-in-out focus-visible:ring-primary hover:text-primary hover:bg-transparent`}
          >
            {showSettings ? "Hide Settings" : "Customize Settings"}
          </Button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={handleSavePreferences}
              className="flex-1"
              size="sm"
            >
              Save Preferences
            </Button>
            <Button onClick={handleCookiesAccept} className="flex-1" size="sm">
              Accept All
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          By clicking "Accept All", you agree to our{" "}
          <Link href="/privacy-policy" className="underline hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
