import { ReactNode } from "react"

interface Props {
  disabled?: boolean
  children: ReactNode
  backgroundColor?: "bg-orange-500" | "bg-sky-600" | "bg-stone-800"
}

export default function SubmitButton({
  children,
  disabled = false,
  backgroundColor = "bg-stone-800",
}: Props) {
  return (
    <button
      type='submit'
      disabled={disabled}
      className={`${backgroundColor} py-1.5 px-3 w-fit h-fit text-white rounded-lg disabled:bg-opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  )
}
