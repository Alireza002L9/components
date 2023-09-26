import './App.css'
import Something from './components/something'
import Form from './components/form'
import Navbar from './components/navbar'
import ContactProfile from './components/contactProfile'
import CreateContact from './components/createContanct'

function App() {

  return (
    <div>
      <Navbar />
      <ContactProfile />
      <CreateContact/>
    </div>
  )
}

export default App
