export default function HeroSkeleton() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-background via-background to-muted flex items-center justify-center pt-16">
      <div className="space-y-4 text-center">
        <div className="w-32 h-32 mx-auto bg-muted animate-pulse rounded-lg" />
        <div className="w-48 h-8 mx-auto bg-muted animate-pulse rounded" />
        <div className="w-64 h-4 mx-auto bg-muted animate-pulse rounded" />
      </div>
    </div>
  )
}
