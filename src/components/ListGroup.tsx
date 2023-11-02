import { Fragment } from "react"

export default function ListGroup() {
  const cities = ["New York", "London", "Nairobi", "Tokyo", "Sydney"]

  return (
    <Fragment>
      <h1 className='text-2xl text-slate-800 font-semibold'>List</h1>
      <ul className='list-disc list-outside'>
        {cities.map((city) => (
          <li key={city} className='text-slate-500 font-medium'>
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
