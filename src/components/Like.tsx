import { useState } from "react"
import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid"

export default function Like() {
  const [isLiked, setIsLiked] = useState(true)

  return (
    <div>
      {isLiked ? (
        <button onClick={() => setIsLiked(false)}>
          <SolidHeartIcon className='w-6 h-6 text-red-500' aria-hidden />
        </button>
      ) : (
        <button onClick={() => setIsLiked(true)}>
          <HeartIcon className='w-6 h-6 text-stone-600' aria-hidden />
        </button>
      )}
    </div>
  )
}
