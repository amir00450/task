import Greeting from "./components/Greeting"
import { useState } from "react";

const App = () => {
    const [LogIn, setLogIn] = useState(false)

    const handleLogIn = () =>{
        setLogIn(true)
    }
    const handleLogOut = () =>{
        setLogIn(false)
    }

    let button;
    if(LogIn){
        button= <button className="btn btn-outline-danger" onClick={handleLogOut}>LogOut</button>
    }else{
        button= <button className="btn btn-outline-success" onClick={handleLogIn}>LogIn</button>
    }
    return (
        <div className="text-center">
            <Greeting LogIn={LogIn} />
            {button}
        </div>
    )
}
export default App;