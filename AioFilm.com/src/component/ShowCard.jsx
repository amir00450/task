import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCard } from '../services/cardsServer'

function ShowCard() {

  const { cardid } = useParams();
  const [card, setCard]= useState([])

  useEffect(()=>{
    const fechdata = async ()=>{
      try {
        const {data: cardData} = await getCard(cardid)
        setCard(cardData)
      } catch (error) {
        console.log(error.message)
      }
    }
    fechdata()
  },[])
  return (
    <>

      <div className='d-grid' style={{marginTop: "6%"}}>
        <div dir='rtl' className='row w-75 container ' style={{marginLeft: "11%"}}>
          <div className='col-4'>
            <img className='rounded-4 shadow-lg' src={card.image} alt="" />
          </div>
          <div className='col'>
            <p> <span className='fs-4 text-light ms-5'> {card.name} </span> </p>
            <p> <span className='fw-bold p-1 rounded' style={{backgroundColor: "gold"}}> IMDB </span>  <span className='text-light ps-3'>10/ <span className='fs-3 fw-bold'>{card.imdb}</span></span> </p>
            <p> <span className='rounded-3 p-2 text-light' style={{background: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 160, 68, .39))"}}>قسمت  <span className='bg-warning px-1 rounded text-dark'>{card.ep}</span> فصل  <span className='bg-warning px-2 rounded text-dark'>{card.s}</span> قرار گرفت </span></p>
            <p className='pt-2'><span className='text-light border fw-bold p-1 rounded-3'> {card.age} </span> <span className='text-light border fw-bold p-1 me-2 rounded-3'> {card.sub} </span>  <span className='text-light me-5 '>ژانر : <span className='bg-warning p-1 me-1 rounded text-dark'>{card.genre}</span></span> <span className='text-light fw-bold me-3'> | </span> <span className='text-light me-2'> محصول : {card.country}</span></p>
            <p className='text-light opacity-75' style={{marginTop: "20%", fontSize: "80%"}}> سال پخش : {card.year} </p>
            <p> <span className='p-2 rounded-3 px-3 text-light' style={{backgroundImage: "linear-gradient(to right, #059669 50%, #0a4f39 100%)"}}> وضعیت : {card.Playbackstatus} </span> </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ShowCard