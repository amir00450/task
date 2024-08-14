import { NavLink } from "react-router-dom"
import "../css/card.css"
function Card(p)
{
  const card = p.data
  console.log(card.image)

  return (
    <>
      <div className="container text-center h-100">
        <div className="row" style={{fontSize:"80%"}}>
          <NavLink to={card.id} id="nav" className="col position-relative text-dark">
            <img className='w-100 rounded-4' src={card.image} alt="" />
            <span className='position-absolute top-0 opacity-75 px-2 rounded rounded-top-0' style={{left: "15%", backgroundColor: "#d1d0cf"}}>{card.age}</span>
            <span className='position-absolute opacity-75 px-2 p-1 rounded' style={{right: "10%", fontSize: "80%", top: "2%",backgroundColor: "#d1d0cf"}}>S{card.S} Ep{card.ep}</span>
            <span className='position-absolute opacity-75 px-1 p-1 rounded' style={{right: "10%", fontSize: "80%", bottom: "2%",backgroundColor: "#d1d0cf"}}>{card.sub}</span>
            <span className='position-absolute opacity-75 rounded' style={{left: "10%", fontSize: "80%", bottom: "2%",backgroundColor: "#d1d0cf",padding: "12% 9%"}}><span className='position-absolute fw-bold p-1 rounded' style={{backgroundColor: "gold", left: "5%", top:"5%"}}> IMDB </span><span className='position-absolute' style={{left: "27%", bottom:"5%"}}>{card.imdb}</span></span>
            <span className="txthover position-absolute top-50 start-50 translate-middle">{card.name}</span>
            <span className="txthover position-absolute start-50 translate-middle rounded p-1 px-2 text-light" style={{fontSize:"60%",bottom: "20%", backgroundImage: "linear-gradient(to right, #059669 50%, #0a4f39 100%)"}}>{card.Playbackstatus}</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Card