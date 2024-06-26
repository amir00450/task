import { BACKGROUND,PURPLE } from "../helper/color"

function Search() {
  return (
    <>
        <form class="d-flex" role="search">
            <input class="form-control me-2 rounded-end-pill" type="search" placeholder="جستجوی مخاطب" aria-label="Search" />
            <button class="btn rounded-start-pill" style={{color: BACKGROUND , backgroundColor: PURPLE}} type="submit"><i className="fa fa-search" style={{paddingTop: "5px"}}></i></button>
        </form>
    </>
  )
}

export default Search