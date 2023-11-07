import Button from "./Button"
import ListGroup from "./ListGroup"

interface Props {
  cartItems: string[]
  onClear: () => void
}

export default function Cart({ cartItems, onClear }: Props) {
  return (
    <div className='flex items-start justify-between'>
      <ListGroup heading='Cart' list={cartItems} />
      <Button onClick={onClear}>Clear Cart</Button>
    </div>
  )
}
