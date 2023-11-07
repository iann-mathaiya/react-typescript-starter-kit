import { Fragment, useState } from "react"

interface ListGroupProps {
  list: string[]
  heading: string
  onSelectItem?: (item: string) => void
}

export default function ListGroup({
  list,
  heading,
  onSelectItem,
}: ListGroupProps) {
  // let cities = ["New York", "London", "Nairobi", "Tokyo", "Sydney"]
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleVisit = (index: number) => setSelectedIndex(index)

  return (
    <div className="space-y-2">
      <h1 className='text-2xl text-slate-800 font-semibold'>{heading}</h1>
      {list.length === 0 && (
        <h2 className=' text-stone-500 font-medium'>No items added yet.</h2>
      )}
      <ul className='list-disc list-outside'>
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              handleVisit(index)
              onSelectItem!(item)
            }}
            className={
              selectedIndex === index
                ? "w-fit text-stone-600 font-semibold cursor-default"
                : "w-fit text-stone-500 font-normal cursor-pointer"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
