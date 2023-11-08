import { FormEvent, useRef } from "react"
import SubmitButton from "./SubmitButton"

export default function Form() {

    const menuItemRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)

    const menuItem = {item: '', price: 0}

    const handleSumbit = (event: FormEvent) => {
        event.preventDefault()
        menuItem.item = menuItemRef.current!.value
        menuItem.price = parseFloat(priceRef.current!.value)

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
            ref={menuItemRef}
            id='menu-item-name'
            placeholder='Americano'
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
            type='number'
            ref={priceRef}
            step='.01'
            placeholder='Price'
            className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <SubmitButton backgroundColor="bg-sky-600">Submit</SubmitButton>

    </form>
  )
}
