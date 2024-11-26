import { FC } from 'react'

export const Stars: FC = () => {
  return (
    <>
      <div className="absolute left-1/4 top-32">
        <Star className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="absolute right-1/4 top-24">
        <Star className="w-4 h-4 md:w-6 md:h-6" />
      </div>
      <div className="absolute left-1/3 bottom-32">
        <Star className="w-5 h-5 md:w-7 md:h-7" />
      </div>
    </>
  )
}

const Star: FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))' }}
  >
    <path
      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
      fill="white"
    />
  </svg>
)

