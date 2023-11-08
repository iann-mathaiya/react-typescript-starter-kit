import { categories } from "../../../lib/categories"

interface Props {
  onSelectCategory: (category: string) => void
}

export default function MenuFilter({ onSelectCategory }: Props) {
  return (
    <div className='mt-2'>
      <select
        onChange={(event) => onSelectCategory(event.target.value)}
        className='block w-full rounded-md border-0 py-2 px-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'
      >
        <option value=''>All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  )
}
