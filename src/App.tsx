import ListGroup from './components/ListGroup'
import Message from './components/Message'

export default function App() {
  let cities = ["New York", "London", "Nairobi", "Tokyo", "Sydney"]
  let countries = ["New Zealand", "Great Britain", "Kenya", "Japan", "Australia"]

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-8 space-y-8'>
      <ListGroup list={cities} heading='Cities' />
      <ListGroup list={countries} heading='Countries' />
    </div>
  )
}
