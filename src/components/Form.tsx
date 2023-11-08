import { FieldValues, useForm } from "react-hook-form"
import SubmitButton from "./SubmitButton"
import { FormEvent, useState } from "react"

export default function Form() {
  const { register, handleSubmit, formState: {errors} } = useForm()
  console.log(register("item"))

  const onSubmit = (data: FieldValues) => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label
          htmlFor='menu-item-name'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Menu Item Name
        </label>
        <div className='mt-2'>
          <input
            type='text'
            id='menu-item-name'
            placeholder='Americano'
            {...register("item", { required: true, minLength: 4 })}
            className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          />
        </div>
       {errors.item?.type === 'required' && <p className="mt-2 text-red-500 text-sm font-normal">Menu Item Name is required </p>}
       {errors.item?.type === 'minLength' && <p className="mt-2 text-red-500 text-sm font-normal">Menu Item Name should be at least 4 characters </p>}
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
            {...register("price")}
            placeholder='Price'
            className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <SubmitButton backgroundColor='bg-sky-600'>Submit</SubmitButton>
    </form>
  )
}
