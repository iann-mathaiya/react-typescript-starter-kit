import { ReactNode } from "react"

interface Props {
  children: ReactNode
  backgroundColor?: "bg-orange-500" | "bg-sky-600" | "bg-stone-800"
}

export default function SubmitButton({
  children,
  backgroundColor = "bg-stone-800",
}: Props) {
  return (
    <button
      type='submit'
      className={`${backgroundColor} py-1.5 px-3 w-fit h-fit text-white rounded-lg`}
    >
      {children}
    </button>
  )
}
