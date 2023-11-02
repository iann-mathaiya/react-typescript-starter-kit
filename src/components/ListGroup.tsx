import { Fragment, useState } from "react"

export default function ListGroup() {
  let cities = ["New York", "London", "Nairobi", "Tokyo", "Sydney"]
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleVisit = ( index: number ) => setSelectedIndex(index)

  return (
    <Fragment>
      <h1 className='text-2xl text-slate-800 font-semibold'>Cities</h1>
      {cities.length === 0 && (
        <h2 className=' text-stone-500 font-medium'>No cities added yet.</h2>
      )}
      <ul className='list-disc list-outside'>
        {cities.map((city, index) => (
          <li
            key={city}
            onClick={() => handleVisit(index)}
            className={selectedIndex === index ? 'text-stone-600 font-semibold cursor-default' : 'text-stone-500 font-normal cursor-pointer'}
          >
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
