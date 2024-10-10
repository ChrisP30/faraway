import DisplayFeatures from './components/DisplayFeatures'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import ItemDisplay from './components/ItemDisplay'
import './styles/App.css'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [id, setId] = useState(0)


  return (
    <div>
      <Header />
      <Form items={items} setItems={setItems} id={id} setId={setId}/>
      <ItemDisplay items={items} setItems={setItems} />
      <DisplayFeatures items={items} setItems={setItems} setId={setId} />
      <Footer />
    </div>
  )
}

export default App
