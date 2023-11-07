import { useState } from "react"
import Like from "./components/Like"
import Alert from "./components/Alert"
import Button from "./components/Button"
import ListGroup from "./components/ListGroup"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import ExpandableText from "./components/ExpandableText"

export default function App() {
  const [alertVisibility, setAlertVisiblity] = useState(false)
  const [cartItems, setCartitems] = useState([
    "Bagel 🥯",
    "Croissant 🥐",
    "Cookies 🍪",
  ])
  const [employees, setEmployees] = useState([
    { id: 1, details: { name: "Eren Yeager", role: "Barista" } },
    { id: 2, details: { name: "Mikasa Ackerman", role: "Baker" } },
  ])
  const [cities, setCities] = useState(["Nairobi", "Tokyo", "Sydney"])
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 4.99,
  })
  const [otherDrinks, setOtherDrinks] = useState([
    "Espresso",
    "Caffe Latte",
    "Iced Coffee",
  ])
  const [customer, setCustomer] = useState({
    name: "Armin Arlert",
    deliveryAddress: {
      city: "Tokyo",
      zipCode: 10100,
    },
  })

  const handleSelectItem = (item: string) => {
    alert(`${item} selected`)
  }

  const handleClearCartItems = () => {
    setCartitems([])
  }

  const handleAddCity = () => {
    setCities((prev) => [...prev, "CapeTown"])
    setAlertVisiblity(true)
  }

  const handleUpdateDrink = () => {
    setDrink({ ...drink, price: 5.99 })
  }

  const handleAddDrink = () => {
    setOtherDrinks((prev) => [...prev, "Cappuccino"])
  }

  const handleUpdateCustomer = () => {
    setCustomer({
      ...customer,
      deliveryAddress: { ...customer.deliveryAddress, zipCode: 50400 },
    })
  }

  const handleUpdateEmployeeInfo = () => {
    setEmployees(
      employees.map((employee) =>
        employee.id === 1
          ? {
              ...employee,
              details: { ...employee.details, name: "Levi Ackerman" },
            }
          : employee
      )
    )
  }

  return (
    <div className='max-w-3xl mx-auto p-4 sm:p-8 space-y-10'>
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

      <div className='flex items-center justify-between'>
        <Like />
        <NavBar cartItemsCount={cartItems.length} />
      </div>

      <Cart cartItems={cartItems} onClear={handleClearCartItems} />

      <div>
        <div className='flex justify-between items-start'>
          <div className='space-y-1'>
            <h3 className='text-xl text-slate-800 font-semibold'>
              {drink.title}
            </h3>
            <h4 className='text-base text-slate-500 font-medium'>
              {drink.price}
            </h4>
          </div>

          <Button onClick={handleUpdateDrink}>Update Drink</Button>
        </div>
        <div className='flex justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <p className='text-sm text-slate-500'>Other drinks:</p>
            {otherDrinks.map((drink, index) => (
              <p
                key={index}
                className='py-1 px-2 text-sm text-slate-500 bg-slate-100 rounded-md'
              >
                {drink}
              </p>
            ))}
          </div>
          <button
            onClick={handleAddDrink}
            className='py-1 px-2 text-sm w-fit h-fit text-slate-500 hover:text-white bg-slate-100 hover:bg-slate-800 rounded-md'
          >
            Add Drink +
          </button>
        </div>
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

      <div className='flex justify-between'>
        <ListGroup
          list={employees.map(
            (employee) => `${employee.details.role} - ${employee.details.name}`
          )}
          heading='Employees'
          onSelectItem={handleSelectItem}
        />
        <Button onClick={handleUpdateEmployeeInfo}>Update Eren's Info</Button>
      </div>

      <div className='flex justify-between'>
        <ListGroup
          list={cities}
          heading='Delivery Cities'
          onSelectItem={handleSelectItem}
        />
        <Button onClick={handleAddCity}>Add New City</Button>
      </div>

      <div>
        <div className='space-y-4'>
          <h1 className='text-2xl text-slate-800 font-semibold'>Reviews</h1>
          <ExpandableText maxCharacters={200}>
            I recently enjoyed a cup of coffee at Sweet Sweet Kahawa, and it was
            an absolute treat. The Sweet Sweet Kahawa was perfectly balanced,
            with a rich, robust flavor and a hint of sweetness. The staff was
            friendly and knowledgeable, adding to the overall positive
            experience. I was impressed by the attention to detail, from the
            beautiful latte art to the well-crafted mugs. It was more than just
            coffee; it was a delightful experience. I can't wait to return and
            explore more of their offerings. If you love coffee, this place is a
            must-visit.
          </ExpandableText>
          <ExpandableText>Very Tasty Coffee</ExpandableText>

          <ExpandableText maxCharacters={400}>
            I recently had the pleasure of savoring a cup of coffee at Sweet
            Sweet Kahawa, and it was an absolutely delightful experience. From
            the moment I stepped in, the cozy ambiance and the inviting aroma of
            freshly brewed coffee created the perfect setting. The barista's
            passion for their craft was evident in every sip of the coffee. I
            ordered a Sweet Sweet Kahawa and was treated to a perfectly balanced
            brew. The coffee had a rich, robust flavor with just the right hint
            of sweetness, making it a true delight for the taste buds. It was
            evident that the coffee beans had been carefully sourced and
            expertly roasted. The service was exceptional, and the staff was not
            only friendly but also knowledgeable about their coffee offerings.
            They took the time to explain the unique characteristics of the
            coffee I chose, making the experience all the more engaging. As I
            enjoyed my coffee, I couldn't help but appreciate the attention to
            detail that went into the entire presentation. From the beautiful
            latte art to the well-crafted mugs, every aspect of the coffee's
            presentation was aesthetically pleasing.
          </ExpandableText>
        </div>
      </div>
    </div>
  )
}
