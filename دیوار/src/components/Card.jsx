import React from 'react'

function Card(props) {
  return (
    <>
      <div class="card mb-3" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={props.data.img} style={{height:"10rem",width:"16rem"}} class="img-fluid rounded m-2" alt="..." />
                    </div>
                    <div class="col-md-8" dir='rtl'>
                        <div class="card-body">
                            <h5 class="card-title">{props.data.name}</h5>
                            <p class="card-text"><small class="text-body-secondary">{props.data.price}</small></p>
                            <p class="card-text"><small class="text-body-secondary">{props.data.info}</small></p>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Card
