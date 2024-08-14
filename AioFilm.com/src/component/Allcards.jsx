import React from 'react'
import {Card, Spiner} from './AllComponents'
import { useParams } from "react-router-dom";

function Cards({loading, cards}) {
    const {genre} = useParams()
    const card = cards.find(cards => cards.genre === genre)
    console.log(card)
  return (
    <div className='container w-75 d-flex flex-wrap' style={{ margin: "5% 13%" , rowGap: "1.5rem"}}>
      {
        <div style={{width: "13rem"}}>
        {<Card className={"col-2"} data={card} />}
        </div>
      }
    </div>
  )
}

export default Cards