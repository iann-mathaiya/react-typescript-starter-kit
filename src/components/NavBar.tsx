import { ShoppingBagIcon } from "@heroicons/react/24/solid"

interface Props {
  cartItemsCount: number
}

export default function NavBar({ cartItemsCount }: Props) {
  return (
    <header>
      <nav>
        <a href='#' className='h-40 w-full p-4 relative'>
          <ShoppingBagIcon className='w-6 h-6 text-stone-700' aria-hidden />
          <p className='p-4 absolute -right-2 -top-2 flex items-center justify-center text-stone-50 bg-stone-700 rounded-full'>
            {cartItemsCount}
          </p>
        </a>
      </nav>
    </header>
  )
}
