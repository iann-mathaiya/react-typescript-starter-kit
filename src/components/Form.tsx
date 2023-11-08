import React from "react"

export default function Form() {
  return (
    <form>
      <div className='mb-3'>
        <label
          htmlFor='first-name'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          First name
        </label>
        <div className='mt-2'>
          <input
            type='text'
            id='first-name'
            placeholder="I am a Yeagerist"
            className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
    </form>
  )
}
