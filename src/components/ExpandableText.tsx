import { ReactNode, useState } from "react"

interface Props {
  children: string
  maxCharacters?: number
}

export default function ExpandableText({
  children,
  maxCharacters = 100,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (children.length <= maxCharacters)
    return (
      <p className='text-sm text-slate-500 font-normal leading-7'>{children}</p>
    )

  const text = isExpanded ? children : children.substring(0, maxCharacters)

  return (
    <div>
      <p className='text-sm text-slate-500 font-normal leading-7'>
        {isExpanded ? text : `${text}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='py-1 px-2 text-xs w-fit h-fit text-slate-500 hover:text-white bg-slate-100 hover:bg-slate-800 rounded-md'
      >
        <span>View {isExpanded ? "Less" : "More"}</span>
      </button>
    </div>
  )
}
