import Alert from './components/Alert'
import ListGroup from './components/ListGroup'

export default function App() {
  let cities = ["New York", "London", "Nairobi", "Tokyo", "Sydney"]
  let countries = ["New Zealand", "Great Britain", "Kenya", "Japan", "Australia"]

  const handleSelectItem = (item: string) => {
    alert(`${item} selected`)
  }

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-8 space-y-8'>

      <Alert text='Successfully deployed' />

      <ListGroup list={cities} heading='Cities' onSelectItem={handleSelectItem} />
      <ListGroup list={countries} heading='Countries' onSelectItem={handleSelectItem} />
    </div>
  )
}
