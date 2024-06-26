import { getobjects,getFilterobject } from "../data/data"
import { useSearchParams , useParams, Outlet } from "react-router-dom"
import Card from "./Card"
function Object() {
    const objects = getobjects()
    const [SearchParams,setSearchParams] = useSearchParams()
    const params = useParams()
    const objectf = getFilterobject(params.filter)
    console.log(objectf)

    return (
        <>
        <div style={{display: "grid", gridTemplateColumns:"0.5fr 1fr" ,gap:"1rem"}}>
            
            {
                objects.filter((obj) =>{
                    let filter = SearchParams.get("filter")
                    if(!filter)return true
                    let name = obj.name
                    return name.startsWith(filter)
                }
                )
                .map(obj=>(
                        <Card data={obj} />
                ))
            }
            
        </div>
        </>
    )
}

export default Object
