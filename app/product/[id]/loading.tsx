export default function ProductLoading() {
  return (
    <div className="container px-4 py-8">
      {/* Breadcrumb Loading */}
      <div className="flex mb-6 text-sm">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="h-4 w-16 bg-muted rounded animate-pulse" />
          <div className="h-4 w-4 bg-muted rounded-full animate-pulse" />
          <div className="h-4 w-20 bg-muted rounded animate-pulse" />
          <div className="h-4 w-4 bg-muted rounded-full animate-pulse" />
          <div className="h-4 w-32 bg-muted rounded animate-pulse" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Gallery Loading */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <div className="w-full h-full bg-muted animate-pulse" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative w-20 h-20 rounded-md overflow-hidden border flex-shrink-0"
              >
                <div className="w-full h-full bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Loading */}
        <div className="space-y-6">
          <div>
            <div className="h-8 w-3/4 bg-muted rounded animate-pulse mb-4" />
            <div className="flex items-center gap-2">
              <div className="h-8 w-24 bg-muted rounded animate-pulse" />
              <div className="h-6 w-16 bg-muted rounded animate-pulse" />
              <div className="h-6 w-20 bg-muted rounded animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-6 w-24 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
          </div>

          <div className="space-y-4">
            <div className="h-6 w-24 bg-muted rounded animate-pulse" />
            <div className="h-10 w-32 bg-muted rounded animate-pulse" />
          </div>

          <div className="pt-4">
            <div className="h-10 w-full md:w-48 bg-muted rounded animate-pulse" />
          </div>

          <div className="border-t pt-6 mt-8">
            <div className="h-6 w-32 bg-muted rounded animate-pulse mb-4" />
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 w-20 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-32 bg-muted rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Loading */}
      <section className="mt-16 mb-8">
        <div className="h-8 w-48 bg-muted rounded animate-pulse mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-muted rounded-lg mb-4" />
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 