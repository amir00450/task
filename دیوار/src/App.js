import { BrowserRouter,Route,Routes } from "react-router-dom"
import {City,Mashhad,Thran,Isfahan, Objects} from "./components/index"
import Object from "./components/Object"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <City /> } />
            <Route path="/Mashhad" element={ <Mashhad/> }>
            <Route path=":filter" element={ <Object /> }/></Route>
            <Route path="/Thran" element={ <Thran/> }></Route>
            <Route path="/Isfahan" element={ <Isfahan/> }></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
