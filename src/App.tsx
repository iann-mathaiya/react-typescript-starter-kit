import axios, { AxiosError, CanceledError } from "axios"
import { useEffect, useState } from "react"

import Like from "./components/Like"
import Alert from "./components/Alert"
import NavBar from "./components/NavBar"
import Button from "./components/Button"
import Reviews from "./components/Reviews"
import Divider from "./components/Divider"
import { menuItems } from "./lib/menuItems"
import ListGroup from "./components/ListGroup"
import Cart from "./components/cart/components/Cart"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import MenuList from "./components/menu-tracker/components/MenuList"
import MenuFilter from "./components/menu-tracker/components/MenuFilter"
import MenuItemForm from "./components/menu-tracker/components/MenuItemForm"
import { User } from "./lib/users"

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

  const [menu, setMenu] = useState(menuItems)

  const [selectedCategory, setSelectedCategory] = useState("")

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

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.title = "Sweet Sweet Kahawa"

    const controller = new AbortController()

    setIsLoading(true)

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data)
        // setIsLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError((error as AxiosError).message)
        // setIsLoading(false)
      })
      .finally(() => {
        // setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

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

      {/* <Cart cartItems={cartItems} onClear={handleClearCartItems} /> */}

      <div className='flex justify-between'>
        <Cart category={selectedCategory} />
        <MenuFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <MenuList
        heading='Menu'
        description='Available items you can order'
        menu={menu}
        onDelete={(id) =>
          setMenu(menu.filter((menuItem) => menuItem.id !== id))
        }
      />

      <MenuItemForm
        onSubmit={(menuItem) =>
          setMenu([...menu, { id: menu.length + 1, ...menuItem }])
        }
      />

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
            <p className='text-sm text-slate-500'>Similar drinks:</p>
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

      <Reviews />

      <Divider />

      <div className='space-y-4'>
        {error && (
          <div>
            <p className='text-base text-red-500 font-medium'>{error}</p>
          </div>
        )}

        {isLoading && (
          <div className='relative w-fit flex justify-center items-center'>
            <p className='py-1 px-2 text-sm text-sky-500 rounded-md'>Loading</p>
            <span className='relative flex h-4 w-4 justify-center items-center'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-sky-500'></span>
            </span>
          </div>
        )}

        {!error &&
          users.map((user) => (
            <div key={user.id}>
              <h3 className='text-lg text-slate-800 font-medium'>
                {user.name}
              </h3>
              <h4 className='text-sm text-slate-500 font-normal'>
                {user.address.zipcode} - {user.address.city}
              </h4>
            </div>
          ))}
      </div>
    </div>
  )
}
