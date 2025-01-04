"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Google } from "@/components/ui/googleIcon";
import { Facebook } from "@/components/ui/facebookIcon";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast({
          title: "Error escrito a mano!!!",
          description: result.error,
        });
        return;
      }

      router.refresh();
      router.push("/");
      toast({
        title: "Escrito a mano!!!",
        description: "Successfully logged in!",
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: result.error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="items-center justify-center min-h-svh flex">
      <div className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Choose your preferred login method</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Login"}
                </Button>
              </div>
            </form>
            <div className="relative">
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
                variant="outline"
                disabled={isLoading}
                className="hover:border-primary duration-300 ease-in-out transition-colors"
                onClick={() => signIn("google", { callbackUrl: "/products" })}
              >
                <Google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button
                variant="outline"
                disabled={isLoading}
                className="hover:border-primary duration-300 ease-in-out transition-colors"
                onClick={() => signIn("facebook", { callbackUrl: "/products" })}
              >
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="underline hover:text-primary duration-300 ease-in-out transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </main>
  );
}
