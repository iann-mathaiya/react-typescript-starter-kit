import { useEffect, useState } from "react"

import ListGroup from "../../ListGroup"
import { CartItems, cartItems } from "../../../lib/cartItems"

export default function Cart({ category }: { category: string }) {
  const [cart, setCart] = useState<CartItems[]>([])

  useEffect(() => {
    console.log("fetching cart items")
    if (category) console.log("fetching cart items", category)
    setCart(cartItems)
  }, [category])

  const cartList = category
    ? cart.filter((item) => item.category === category).map((item) => item.name)
    : cart.map((item) => item.name)

  return <ListGroup heading='Cart' list={cartList} />
}
