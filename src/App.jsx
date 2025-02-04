import { useState } from 'react'
import './App.css'

//import Button from './componets/Firstcomponent.jsx'
//import Main from './componets/Secondcomponent.jsx'
import { Samaphone } from './Samaphore/NameInput.jsx'
import { TrafficLightButton } from './Samaphore/Switch.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
        <Main>
          <Button />
        </Main>
        <TrafficLightButton/>
        <Samaphone/>

      
    </>
  )
}

export default App
