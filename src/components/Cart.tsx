import ListGroup from "./ListGroup"

interface Props {
  cartItems: string[]
}

export default function Cart({ cartItems }: Props) {
  return (
    <div>
      <ListGroup heading="Cart" list={cartItems} />

    </div>
  )
}
