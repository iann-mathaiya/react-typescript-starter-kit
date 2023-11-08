import SubmitButton from "./SubmitButton"
import { FormEvent, useState } from "react"

export default function Form() {
  const [menuItem, setMenuItem] = useState({ item: "", price: 0.00 })

  const handleSumbit = (event: FormEvent) => {
    event.preventDefault()

    console.log(menuItem)
  }

  return (
    <form onSubmit={handleSumbit}>
      <div className='mb-3'>
        <label
          htmlFor='menu-item-name'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Menu Item
        </label>
        <div className='mt-2'>
          <input
            type='text'
            id='menu-item-name'
            value={menuItem.item}
            placeholder='Americano'
            onChange={(event) =>
              setMenuItem({ ...menuItem, item: event.target.value })
            }
            className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div className='mb-3'>
        <label
          htmlFor='price'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Price
        </label>
        <div className='mt-2'>
          <input
            id='price'
            step='.01'
            type='number'
            value={menuItem.price}
            onChange={(event) =>
              setMenuItem({
                ...menuItem,
                price: parseFloat(event.target.value),
              })
            }
            placeholder='Price'
            className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <SubmitButton backgroundColor='bg-sky-600'>Submit</SubmitButton>
    </form>
  )
}
