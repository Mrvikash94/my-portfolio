'use client'

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full glass glow animate-glow-pulse">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-500 animate-spin flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center space-x-2">
          <span className="text-zinc-400 font-medium">Loading</span>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-violet-500 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
