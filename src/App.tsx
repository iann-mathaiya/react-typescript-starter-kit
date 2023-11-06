import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"
import ListGroup from "./components/ListGroup"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"

export default function App() {
  const [alertVisibility, setAlertVisiblity] = useState(false)
  const [cities, setCities] = useState<string[]>(["New York", "London", "Nairobi", "Tokyo", "Sydney"])

  const handleSelectItem = (item: string) => {
    alert(`${item} selected`)
  }

  const handleAddCity = () => {
    setCities(prev => [...prev, 'CapeTown'])
    setAlertVisiblity(true)
  }

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-8 space-y-8'>
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

    </div>
  )
}
