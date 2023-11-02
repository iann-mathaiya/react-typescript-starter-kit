import { Fragment } from "react"

export default function ListGroup() {
  let cities = ["New York", "London", "Nairobi", "Tokyo", "Sydney"]

  return (
    <Fragment>
      <h1 className='text-2xl text-slate-800 font-semibold'>Cities</h1>
      {cities.length === 0 && (
        <h2 className=' text-stone-500 font-medium'>No cities added yet.</h2>
      )}
      <ul className='list-disc list-outside'>
        {cities.map((city) => (
          <li
            key={city}
            onClick={(event) => console.log(`${city} visited`, event)}
            className='text-stone-500 font-normal'
          >
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
