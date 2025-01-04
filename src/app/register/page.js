"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { Google } from "@/components/ui/googleIcon";
import { Facebook } from "@/components/ui/facebookIcon";

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSocialLogin = async (provider) => {
    try {
      setIsLoading(true);
      await signIn(provider, {
        callbackUrl: "/register/complete",
      });
    } catch (error) {
      toast({
        title: "Failed to login with",
        description: `${error.message + provider}`,
        duration: 3000,
      });
    }

    const onSubmit = async (data) => {
      try {
        setIsLoading(true);

        // 1. Register the user
        const registerResponse = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            role: data.role,
          }),
        });

        const registerResult = await registerResponse.json();

        if (!registerResponse.ok) {
          throw new Error(registerResult.message || "Failed to register");
        }

        // 2. Automatically sign in after registration
        const signInResult = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (signInResult?.error) {
          throw new Error(signInResult.error);
        }

        // 3. Redirect to profile completion
        toast({
          title: "Successfully registered!",
          description: `${data.email}`,
          duration: 3000,
        });
        router.push("/register/complete");
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: `${error.message || "No message!"}`,
          duration: 3000,
        });
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <main className="items-center justify-center min-h-svh flex">
        <div className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Enter your information below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="hover:border-primary duration-300 ease-in-out transition-colors"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  disabled={isLoading}
                />
                {errors.email && (
                  <span className="text-sm text-destructive">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="hover:border-primary duration-300 ease-in-out transition-colors"
                  id="password"
                  type="password"
                  disabled={isLoading}
                />
                {errors.password && (
                  <span className="text-sm text-destructive">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  id="confirmPassword"
                  type="password"
                  disabled={isLoading}
                />
                {errors.confirmPassword && (
                  <span className="text-sm text-destructive">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Register"}
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="hover:border-primary duration-300 ease-in-out transition-colors"
                  onClick={() => handleSocialLogin("google")}
                  disabled={isLoading}
                >
                  <Google className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="hover:border-primary duration-300 ease-in-out transition-colors"
                  onClick={() => handleSocialLogin("facebook")}
                  disabled={isLoading}
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="underline hover:border-primary duration-300 ease-in-out transition-colors"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </div>
      </main>
    );
  };
}
