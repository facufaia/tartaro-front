import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { User, MapPin, Lock } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSession } from "next-auth/react";

export default function Account() {
  // const [userData, setUserData] = useState({
  //   name: "John Doe",
  //   email: "john@example.com",
  //   phone: "+1234567890",
  //   addresses: [
  //     {
  //       id: 1,
  //       street: "123 Main St",
  //       city: "New York",
  //       state: "NY",
  //       zip: "10001",
  //       isDefault: true,
  //     },
  //   ],
  // });
  const { data: user } = useSession();
  const { toast } = useToast();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="container mx-auto py-8 min-h-[90svh]">
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
            <form onSubmit={handleUpdateProfile} className="space-y-4">
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

        {/* Shipping Addresses
        <div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Shipping Addresses
            </CardTitle>
          </CardHeader>
          <CardContent>
            {userData?.addresses?.map((address) => (
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
            <Button className="w-full mt-4" variant="outline">
              Add New Address
            </Button>
          </CardContent>
        </div> */}

        {/* Password Change */}
        <Card className="lg:col-span-2 border-none">
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
