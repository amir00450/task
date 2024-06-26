import { useParams,Outlet } from "react-router-dom"
import { getFilterobject,getobjects } from "../data/data"
import Card from "./Card"

function Object() {
    const params = useParams()
    const objectf = getFilterobject(params.filter)
  return (
    <>
        <Card data ={objectf} />
    </>
  )
}

export default Object