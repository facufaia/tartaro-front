export default function Loading() {
  return (
    <div className="container mx-auto py-12 px-6 md:px-8">
      {/* Filter Bar Skeleton */}
      <div className="mb-6 animate-pulse">
        <div className="h-10 bg-muted rounded-md w-[200px]" />
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse space-y-4">
            <div className="aspect-square bg-muted rounded-md" />
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
