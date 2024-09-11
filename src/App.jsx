
import { BrowserRouter , Routes , Route} from "react-router-dom"
import { useState } from 'react'


import LoginPage from "./loginPage"
import RegistrationPage from"./registrationPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/login" element={<LoginPage/>}/>
       
       <Route path="/" element={<RegistrationPage/>} />
        
     </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
