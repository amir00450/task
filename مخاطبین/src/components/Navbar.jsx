import { BACKGROUND,PURPLE } from "../helper/color"
import Search from "./Search"

function Navbar() {
    return (
        <>
            <nav class="navbar p-3" dir="rtl" style={{backgroundColor: BACKGROUND}}>
                <div class="container-fluid justify-content-start" style={{gap: "20rem", marginRight: "10rem"}}>
                    <a class="navbar-brand text-light">
                        <i className="fa fa-user" style={{color: PURPLE}}></i>
                        <p className="mx-2 d-inline">وب اپلیکیشن</p>
                        <span style={{color: PURPLE}}>مدیریت مخاطبین</span>
                    </a>
                    <Search />
                </div>
            </nav>
        </>
    )
}

export default Navbar