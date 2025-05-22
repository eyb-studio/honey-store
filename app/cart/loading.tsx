export default function CartLoading() {
  return (
    <div className="container px-4 py-8">
      <div className="h-8 w-48 bg-muted rounded mb-8 animate-pulse" />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg overflow-hidden">
            <div className="p-6 border-b">
              <div className="h-6 w-32 bg-muted rounded animate-pulse" />
            </div>

            <div className="divide-y">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-6 flex flex-col sm:flex-row gap-4">
                  <div className="w-24 h-24 bg-muted rounded-md animate-pulse" />
                  <div className="flex-1 space-y-4">
                    <div className="h-5 w-3/4 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
                    <div className="flex gap-4">
                      <div className="h-10 w-32 bg-muted rounded animate-pulse" />
                      <div className="h-10 w-24 bg-muted rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t">
              <div className="h-9 w-32 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-card rounded-lg sticky top-20">
            <div className="p-6 border-b">
              <div className="h-6 w-32 bg-muted rounded animate-pulse" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                <div className="h-4 w-20 bg-muted rounded animate-pulse" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-16 bg-muted rounded animate-pulse" />
                <div className="h-4 w-16 bg-muted rounded animate-pulse" />
              </div>
              <div className="pt-4 border-t flex justify-between">
                <div className="h-6 w-20 bg-muted rounded animate-pulse" />
                <div className="h-6 w-24 bg-muted rounded animate-pulse" />
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="h-16 bg-muted rounded mb-4 animate-pulse" />
              <div className="h-12 w-full bg-muted rounded animate-pulse" />
              <div className="mt-4 h-4 w-3/4 bg-muted rounded animate-pulse mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 