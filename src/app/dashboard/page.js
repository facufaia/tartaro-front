"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Account from "@/components/dashboard/Account";
import Orders from "@/components/dashboard/Orders";

export default function Dashboard() {
  return (
    <div className="mx-auto p-8 md:p-16 min-h-[90svh]">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <Orders />
        </TabsContent>

        <TabsContent value="account">
          <Account />
        </TabsContent>
      </Tabs>
    </div>
  );
}
