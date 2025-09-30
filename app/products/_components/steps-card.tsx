interface StepCardProps {
  number: number
  title: string
  description: string
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="text-center px-2">
      {/* Step Number Circle */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#1D9B5E] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <span className="text-xl sm:text-3xl font-bold text-white">{number}</span>
      </div>

      {/* Step Content */}
      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-lg sm:text-xl font-semibold text-[#1D9B5E]">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">{description}</p>
      </div>
    </div>
  )
}
