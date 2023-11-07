import { ShoppingBagIcon } from "@heroicons/react/24/solid"

interface Props {
  cartItemsCount: number
}

export default function NavBar({ cartItemsCount }: Props) {
  return (
    <header>
      <nav>
        <a href='#' className='h-8 w-fit p-4 relative flex items-center justify-center'>
          <p className='py-0.5 px-2 absolute -top-1 -right-0.5 flex items-center justify-center text-stone-50 text-sm bg-green-500 rounded-full'>
            {cartItemsCount}
          </p>
           <ShoppingBagIcon className='w-6 h-6 text-stone-700' aria-hidden />
        </a>
      </nav>
    </header>
  )
}
