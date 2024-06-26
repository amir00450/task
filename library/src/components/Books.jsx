import { getBooks } from "../data/data";
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom"

const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    let books = getBooks();
    return (
        <>
            <div className="Books">
                <input type="text" placeholder="search" value={searchParams.get("filter") || ""} style={{ width: "15vw", height: "1.5rem" }}
                    onChange={
                        event => {
                            let filter = event.target.value
                            console.log(filter)

                            if (filter) {
                                setSearchParams({ filter })
                            } else {
                                setSearchParams({})
                            }
                        }
                    } />
                {
                    books.filter((book) => {
                        let filter = searchParams.get("filter")
                        if (!filter) return true
                        let name = book.name
                        return name.startsWith(filter)
                    })
                        .map(book => (
                            <NavLink
                                to={`${book.id}${location.search}`} key={book.id}>
                                {book.name}
                            </NavLink>
                        ))
                }
            </div>
            <Outlet />
        </>
    )
}
export default Books