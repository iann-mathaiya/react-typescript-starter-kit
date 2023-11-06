import Alert from "./components/Alert"
import Button from "./components/Button"
import ListGroup from "./components/ListGroup"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"

export default function App() {
  let cities = ["New York", "London", "Nairobi", "Tokyo", "Sydney"]
  let countries = ["New Zealand", "Great Britain", "Kenya", "Japan", "Australia" ]

  const handleSelectItem = (item: string) => {
    alert(`${item} selected`)
  }

  const handleAddCity = () => {
    cities.push('CapeTown')
  }

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-8 space-y-8'>
      <Alert>
        <div className='flex items-center gap-2 justify-center'>
          Successfully deployed{" "}
          <PaperAirplaneIcon
            className='w-4 h-4 text-green-600 -rotate-45'
            aria-hidden
          />
        </div>
      </Alert>

      <div>
        <Button onClick={handleAddCity}>Add New City</Button>
      </div>

      <ListGroup
        list={cities}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />

      <ListGroup
        list={countries}
        heading='Countries'
        onSelectItem={handleSelectItem}
      />

    </div>
  )
}
