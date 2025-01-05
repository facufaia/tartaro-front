"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

export default function NewsLetter({ setShowNewsletter }) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // API call would go here
      localStorage.setItem("hasSubscribed", "true");
      setShowNewsletter(false);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
        duration: 3000,
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem with your subscription.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow-lg border animate-fade-in-right max-w-[90svw] sm:max-w-[340px] sm:min-w-[320px]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">Subscribe to Newsletter</h3>
        <button onClick={() => setShowNewsletter(false)}>
          <X className="h-4 w-4 hover:text-primary transition-colors duration-200 ease-in-out" />
        </button>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Get 10% off your first order!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            className={`hover:border-primary transition-colors duration-200 ease-in-out focus-visible:ring-primary ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full"
          size="sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
