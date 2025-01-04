import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function ProductSkeleton() {
  return (
    <Card className="shadow-none border rounded-lg p-0 cursor-pointer relative min-h-max">
      <Skeleton className="w-full h-[200px] rounded-t-lg" />
      <CardContent className="px-4 py-2">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/3 mb-2" />
        <Skeleton className="h-4 w-1/4" />
      </CardContent>
    </Card>
  );
}
