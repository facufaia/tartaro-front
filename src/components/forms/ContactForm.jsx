"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
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
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon!",
        duration: 3000,
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 animate-fade-in"
    >
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          className={`hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary ${
            errors.name && "border-red-500"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-2">
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
          className={`hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary ${
            errors.name && "border-red-500"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          className={`min-h-[150px] hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary ${
            errors.name && "border-red-500"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
