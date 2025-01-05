"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { User, MapPin, Lock } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Account() {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const { data: user } = useSession();
  const [addresses, setAddresses] = useState(user?.user?.addresses || []);

  const { toast } = useToast();

  const handleAddAddress = async (data) => {
    // TODO: API call to save address
    setShowAddressModal(false);
    setAddresses([...addresses, data]);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="mx-auto py-8 min-h-[90svh]">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="lg:col-span-2 border-none">
          <CardHeader className="px-0">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-md">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={user?.user?.name}
                  className="hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary"
                  onChange={(e) => console.log({ name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  className="hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary"
                  value={user?.user?.email}
                  onChange={(e) => console.log({ email: e.target.value })}
                />
              </div>
              <Button type="submit">Update Profile</Button>
            </form>
          </CardContent>
        </Card>

        {/* Shipping Addresses */}
        <div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Shipping Addresses
            </CardTitle>
          </CardHeader>
          <CardContent>
            {addresses?.map((address) => (
              <div
                key={address.id}
                className="p-4 border rounded-lg mb-4 last:mb-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">
                    {address.isDefault && (
                      <Badge className="mb-2">Default</Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
            ))}
            <Button
              className="w-full mt-4"
              variant="outline"
              onClick={() => setShowAddressModal(true)}
            >
              Add New Address
            </Button>
            <Dialog open={showAddressModal} onOpenChange={setShowAddressModal}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Address</DialogTitle>
                </DialogHeader>
                <AddressForm
                  onSSS={handleAddAddress}
                  onCancel={() => setShowAddressModal(false)}
                />
              </DialogContent>
            </Dialog>
          </CardContent>
        </div>

        {/* Password Change */}
        <Card className="lg:col-span-2 border-none max-w-md">
          <CardHeader className="px-0">
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Change Password
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">New Password</label>
                <Input
                  type="password"
                  className="hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium">
                  Confirm New Password
                </label>
                <Input
                  type="password"
                  className="hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary"
                />
              </div>
              <Button>Change Password</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
// import { useToast } from "@/components/ui/use-toast"
// import { useState } from "react";

export function AddressForm({ onSSS, onCancel }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const { toast } = useToast();

  const handleFormSubmit = async (data) => {
    try {
      toast({
        title: "Address saved",
        description: "Your new shipping address has been added successfully",
        duration: 3000,
      });
      onSSS(data);
      onCancel();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save address. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <Input
        {...register("street", { required: true })}
        placeholder="Street Address"
      />
      <Input {...register("city", { required: true })} placeholder="City" />
      <Input {...register("state", { required: true })} placeholder="State" />
      <Input {...register("zip", { required: true })} placeholder="ZIP Code" />
      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Address"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
