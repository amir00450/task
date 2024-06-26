import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const App = ()=>{
    return(
        <div>
            <header>
                <p> Shop whit react </p>
                <ul>
                    <li>
                        <NavLink to={'/Home'}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/Books'}> Books </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/About'}> About </NavLink>
                    </li>
                </ul>
            </header>

            <Outlet />
        </div>
    )
}
export default App