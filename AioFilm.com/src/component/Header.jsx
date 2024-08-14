import { NavLink, useSearchParams } from "react-router-dom"
import { Card, Spiner } from "./AllComponents"
import { useState } from "react"
import "../css/style.css"
function Header({ loading, cards }) {
    const [hamber, sethamber] = useState(false)
    function activehamber() {
        if (hamber == false) {
            sethamber(true)
        } else {
            sethamber(false)
        }
    }
    const [searchparams, setsearchparams] = useSearchParams()
    return (
        <>
            <nav className="header navbar navbar-expand position-sticky top-0" style={{ zIndex: "10000", backgroundColor: "rgba(10, 13, 16, .6)", backdropFilter: "blur(6px) opacity(1)" }}>
                <div className="container-fluid">
                    <NavLink to={"/login"} className="btn btn-outline-secondary rounded fw-bold text-light me-5" style={{ fontSize: "0.7rem" }}>ورود / ثبت نام</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="search ms-5 col-7 d-none d-sm-flex" role="search">
                            <input dir="rtl" className="form-control" type="search" placeholder="جستوجوی سریع" aria-label="Search" onChange={event => {
                                let filter = event.target.value
                                console.log(filter)
                                if (filter) {
                                    setsearchparams({ filter })
                                } else {
                                    setsearchparams({})
                                }
                            }} />

                        </form>

                        <button onClick={activehamber} type="buttom" className="btn d-none d-sm-flex me-2" style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginLeft: "6rem" }}>
                            <div className="" style={{ width: "1.5rem", height: "0.2rem", backgroundColor: "white", borderRadius: "10%" }}></div>
                            <div className="" style={{ width: "1.5rem", height: "0.2rem", backgroundColor: "white", borderRadius: "10%" }}></div>
                            <div className="" style={{ width: "1.5rem", height: "0.2rem", backgroundColor: "white", borderRadius: "10%" }}></div>
                        </button>
                        <NavLink to={"/main"} className={"ms-2"}>
                            <img className="navbar-brand" src="https://s8.uupload.ir/files/logo_bor.png" alt="" />
                        </NavLink>

                    </div>

                </div>
            </nav>
            {
                hamber == false ?
                    <p className="d-none"></p>
                    :
                    <div className="container text-light w-50 p-4 pt-1 position-sticky" style={{ top: "6rem", zIndex: "1000", background: "rgba(20, 24, 33, .75)", backdropFilter: "blur(5px)", boxShadow: "0 3px 15px rgba(0, 0, 0, .2)", borderRadius: "30px" }}>
                        <div className="col text-center">
                            <div className="row px-3 pt-1 border-bottom me-0">
                                <div className="col"><button className="btn btn-outline-dark border-0 text-light py-2 rounded-5 w-100"> ژانر </button></div>
                            </div>
                            <div className="d-flex flex-wrap">
                                {
                                    cards.map(c => (
                                        <NavLink className={"btn btn-outline-light m-3"} to={`/main/g/${c.genre}`} key={"genre"}>{c.genre}</NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }
            {
                searchparams == "" ?
                    <p className="d-none"></p>
                    :
                    <div className="container w-50 p-4 pt-1 position-sticky d-flex flex-wrap" style={{ top: "6rem", zIndex: "1000", background: "rgba(255, 255, 255, .30)", backdropFilter: "blur(5px)", boxShadow: "0 3px 15px rgba(0, 0, 0, .2)", borderRadius: "30px" }}>

                        {
                            loading ? <Spiner /> :
                                cards.length > 0 ?
                                    cards.filter((c) => {
                                        let filter = searchparams.get("filter")
                                        let name = c.name
                                        return name.startsWith(filter)
                                    })
                                        .map(c => (
                                            <div className="pt-3" style={{ width: "13rem" }}>
                                                {<Card className={"col-2"} data={c} />}
                                            </div>
                                        )) : (
                                        <div className="text-light text-center"> فیلم یافت نشد</div>
                                    )
                        }

                    </div>
            }
        </>
    )
}

export default Header