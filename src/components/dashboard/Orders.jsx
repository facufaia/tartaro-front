import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, DollarSign, ShoppingCart } from "lucide-react";

export default function Orders() {
  const orders = [
    // {
    //   id: "#1234",
    //   date: "2024-03-15",
    //   status: "delivered",
    //   total: 129.99,
    //   items: 3,
    // },
    // {
    //   id: "#1235",
    //   date: "2024-03-14",
    //   status: "processing",
    //   total: 79.99,
    //   items: 2,
    // },
  ];

  const getStatusColor = (status) => {
    const colors = {
      delivered: "bg-green-500",
      processing: "bg-yellow-500",
      cancelled: "bg-red-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <>
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-primary/20 px-4 rounded-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="px-0">
            <div className="text-2xl font-bold">{orders.length}</div>
          </CardContent>
        </div>

        <div className="bg-primary/20 px-4 rounded-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 px-0">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="px-0">
            <div className="text-2xl font-bold">
              ${orders.reduce((acc, order) => acc + order.total, 0).toFixed(2)}
            </div>
          </CardContent>
        </div>

        <div className="bg-primary/20 px-4 rounded-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="px-0">
            <div className="text-2xl font-bold">
              {orders.reduce((acc, order) => acc + order.items, 0)}
            </div>
          </CardContent>
        </div>
      </div>

      {/* Orders Table */}
      <Card className="border-none">
        <CardHeader className="px-0">
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    {new Date(order.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${getStatusColor(order.status)} text-white`}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              {!orders.length && (
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={5}>No orders found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
