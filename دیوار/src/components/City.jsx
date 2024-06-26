import { NavLink } from "react-router-dom"

function City() {
  return (
    <>
      <div className="container">
        <p className='fs-1 mt-5 text-center text-danger'>دیوار</p>


        <div className="list-group d-flex flex-row gap-5 justify-content-center mt-5">
            <NavLink to={"/Mashhad"} key={"city"} className={'list-group-item rounded btn btn-outline-secondary'}>مشهد</NavLink>
            <NavLink to={"/Thran"} key={"city"} className={'list-group-item rounded btn btn-outline-secondary'}>تهران</NavLink>
            <NavLink to={"/Isfahan"} key={"city"} className={'list-group-item rounded btn btn-outline-secondary'}>اصفهان</NavLink>
        </div>
      </div>
    </>
  )
}

export default City
