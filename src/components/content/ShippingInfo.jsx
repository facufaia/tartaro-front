import USAMap from "@/components/USAMap";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchCollection } from "@/lib/api";

export default async function ShippingInfo({ shippingData }) {
  const { data } = await fetchCollection("shippings");
  // Sort states but keep 'default' at end
  const sortedData = [...data].sort((a, b) => {
    if (a.state === "default") return 1;
    if (b.state === "default") return -1;
    return a.state.localeCompare(b.state);
  });

  return (
    <div className="space-y-8 mt-10">
      <h2 className="text-xl animate-fade-in">{shippingData.shipping}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 animate-fade-in">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{shippingData.table_header_1}</TableHead>
                <TableHead>{shippingData.table_header_2}</TableHead>
                <TableHead>{shippingData.table_header_3}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((shipping) => (
                <TableRow
                  key={shipping.id}
                  className="hover:bg-primary transition-colors duration-300 ease-in-out"
                >
                  <TableCell className="font-medium">
                    {shipping.state === "default"
                      ? "Other States"
                      : shipping.state}
                  </TableCell>
                  <TableCell>
                    {shipping.shipping_cost === 0
                      ? "Free Shipping"
                      : `$${shipping.shipping_cost.toFixed(2)}`}
                  </TableCell>
                  <TableCell>{`${shipping.delivery_time - 1} - ${
                    shipping.delivery_time
                  } days`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <USAMap shippingCosts={sortedData} />
        </div>
      </div>
    </div>
  );
}
