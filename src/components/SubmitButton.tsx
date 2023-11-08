import { ReactNode } from "react"

interface Props {
  disabled?: boolean
  children: ReactNode
}

export default function SubmitButton({
  children,
  disabled = false,
}: Props) {
  return (
    <button
      type='submit'
      disabled={disabled}
      className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:text-blue-900/60 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      {children}
    </button>
  )
}
