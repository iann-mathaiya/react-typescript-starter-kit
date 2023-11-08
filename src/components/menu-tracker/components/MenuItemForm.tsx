import { z } from "zod"
import SubmitButton from "../../SubmitButton"
import { categories } from "../../../lib/categories"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"

const schema = z.object({
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
  item: z
    .string()
    .min(4, { message: "Item name must be at least 4 characters." }),
  price: z
    .number({
      required_error: "Price is required.",
      invalid_type_error: "Price is must be a number.",
    })
    .min(1, { message: "Price must be atleast $1.00" }),
})

type FormData = z.infer<typeof schema>

export default function MenuItemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

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
        {errors.item && (
          <p className='mt-2 text-red-500 text-sm font-normal'>
            {errors.item.message}
          </p>
        )}
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
            {...register("price", { valueAsNumber: true })}
            placeholder='Price'
            className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          />
          {errors.price && (
            <p className='mt-2 text-red-500 text-sm font-normal'>
              {errors.price.message}
            </p>
          )}
        </div>
      </div>

      <div className='mb-3'>
        <label
          htmlFor='category'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Category
        </label>
        <div className='mt-2'>
          <select
            id='category'
            placeholder='Select one option'
            className='block w-full rounded-md border-0 py-2 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
          >
            <option value=''>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className='mt-2 text-red-500 text-sm font-normal'>
              {errors.category.message}
            </p>
          )}
        </div>
      </div>

      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}
