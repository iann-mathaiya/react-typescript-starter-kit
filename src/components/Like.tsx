import { useState } from "react"
import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid"

export default function Like() {
  const [isLiked, setIsLiked] = useState(true)

  const toggle = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div>
      {isLiked ? (
        <button onClick={toggle}>
          <SolidHeartIcon className='w-6 h-6 text-red-500' aria-hidden />
        </button>
      ) : (
        <button onClick={toggle}>
          <HeartIcon className='w-6 h-6 text-stone-600' aria-hidden />
        </button>
      )}
    </div>
  )
}
