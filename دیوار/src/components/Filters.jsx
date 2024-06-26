import { NavLink } from "react-router-dom"
import { getobjects } from "../data/data"


function Filters() {
    return (
        <>
            <ul class="list-group list-group-flush w-25 position-absolute end-0"dir='RTL'>
                <NavLink to={'Home'} key={ "filter" } className={'link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'}><li class="list-group-item">املاک</li></NavLink>
                <NavLink to={'Car'} key={ "filter" } className={'link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'}><li class="list-group-item">وسایل نقلیه</li></NavLink>
                <NavLink to={'Mobile'} key={ "filter" } className={'link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'}><li class="list-group-item">کالای دیجیتال</li></NavLink>
                <NavLink to={'Cloths'} key={ "filter" } className={'link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'}><li class="list-group-item">پوشاک</li></NavLink>
                <li class="list-group-item">قیمت</li>
                <div className="d-flex gap-1">
                    <input class="list-group-item w-50" type="text" placeholder="حداقل" />    <input class="list-group-item w-50" type="text" placeholder="حداکثر" />
                </div>

            </ul>
        </>
    )
}

export default Filters
