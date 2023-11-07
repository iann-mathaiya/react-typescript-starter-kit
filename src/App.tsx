import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"
import ListGroup from "./components/ListGroup"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import Like from "./components/Like"

export default function App() {
  const [alertVisibility, setAlertVisiblity] = useState(false)
  const [cities, setCities] = useState<string[]>([
    "New York",
    "London",
    "Nairobi",
    "Tokyo",
    "Sydney",
  ])
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 4.99,
  })
  const [customer, setCustomer] = useState({
    name: "Ian Mathaiya",
    deliveryAddress: {
      city: "Nairobi",
      zipCode: 10100,
    },
  })

  const handleSelectItem = (item: string) => {
    alert(`${item} selected`)
  }

  const handleAddCity = () => {
    setCities((prev) => [...prev, "CapeTown"])
    setAlertVisiblity(true)
  }

  const handleUpdateDrink = () => {
    setDrink({ ...drink, price: 5.99 })
  }

  const handleUpdateCustomer = () => {
    setCustomer({
      ...customer,
      deliveryAddress: { ...customer.deliveryAddress, zipCode: 50400 },
    })
  }

  return (
    <div className='max-w-2xl mx-auto p-4 sm:p-8 space-y-8'>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisiblity(false)}>
          <div className='flex items-center gap-2 justify-center'>
            City successfully added{" "}
            <PaperAirplaneIcon
              className='w-4 h-4 text-green-600 -rotate-45'
              aria-hidden
            />
          </div>
        </Alert>
      )}

      <div className='flex justify-between'>
        <ListGroup
          list={cities}
          heading='Cities'
          onSelectItem={handleSelectItem}
        />
        <Button onClick={handleAddCity}>Add New City</Button>
      </div>

      <Like />

      <div className='flex justify-between items-start'>
        <div>
          <h3 className='text-xl text-slate-800 font-semibold'>
            {drink.title}
          </h3>
          <h4 className='text-base text-slate-500 font-medium'>
            {drink.price}
          </h4>
        </div>
        <Button onClick={handleUpdateDrink}>Update Drink</Button>
      </div>

      <div className='flex justify-between items-start'>
        <div>
          <h3 className='text-xl text-slate-800 font-semibold'>
            {customer.name}
          </h3>
          <h4 className='text-base text-slate-500 font-medium'>
            {customer.deliveryAddress.zipCode} - {customer.deliveryAddress.city}
          </h4>
        </div>
        <Button onClick={handleUpdateCustomer}>Update Customer Info</Button>
      </div>
    </div>
  )
}
