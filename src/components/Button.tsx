import { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClick: () => void
  backgroundColor?: "bg-orange-500" | "bg-blue-700" | "bg-stone-800"
}

export default function Button({
  children,
  onClick,
  backgroundColor = "bg-stone-800",
}: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${backgroundColor} py-1.5 px-3 w-fit h-fit text-white rounded-lg`}
    >
      {children}
    </button>
  )
}
