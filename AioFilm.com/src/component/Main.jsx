import { useEffect, useState } from "react"
import { getAllCards } from "../services/cardsServer"
import { Card,Spiner } from "./AllComponents"
import { NavLink } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

function Main({loading, cards}) {

  return (
    <>
      <div dir='rtl' className='' style={{ margin: "5% 13%" }}>
        <p style={{ color: "#ffb900" }}>پیشنهاد ویژه آیوفیلم</p>
      </div>
      <section className='container w-75 d-flex'>
        <Swiper
          slidesPerView={5}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
          loading ? <Spiner /> :
            cards.length > 0 ? cards.map(c => (
              <SwiperSlide>
                {<Card data={c} />}
              </SwiperSlide>

            )) : (
              <div className="text-danger text-center p-5"> فیلم یافت نشد</div>
            )
        }
        </Swiper>
      </section>


      <div className="container row w-75 mx-auto" style={{ marginTop: "7%" }}>
        <div className="col-5 mx-auto bg-warning p-3 rounded-4"><i className="pe-4 fs-3 fa-brands fa-android"></i>  اپلیکیشن اندرویدی آیوفیلم  <a className=" ms-4 btn border border-dark" style={{ textDecoration: "none" }} href="https://download.aioapp.top/" target="blank">دانلود اپلیکیشن</a></div>
        <div className="col-5 mx-auto bg-warning p-3 rounded-4"><i className="pe-4 fs-3 fa-regular fa-comment"></i>  اتاق گفتگوی آیوفیلم در تلگرام <a className=" ms-4 btn border border-dark" style={{ textDecoration: "none" }} href="https://download.aioapp.top/" target="blank">ورود به چت</a></div>
      </div>

      <p dir="rtl" className="text-secondary p-1 pb-2 rounded-3" style={{ background: "linear-gradient(to right, rgba(63, 22, 210, 0), rgba(255, 206, 15, 0.11))", margin: "0 13%", marginTop: "10%" }}><i className="me-1 fs-4 ps-2 fa-brands fa-stack-overflow"></i> سریال های بروز شده  <NavLink to={"/allcards"} target="blank" className={"btn btn-warning rounded-start-pill"} style={{ marginRight: "71%" }}> مشاهده بیشتر </NavLink></p>
      <section className="container w-75 d-flex mt-5">
      <Swiper
          slidesPerView={5}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
          loading ? <Spiner /> :
            cards.length > 0 ? cards.map(c => (
              <SwiperSlide>
              {<Card className={"col-2"} data={c} />}</SwiperSlide>

            )) : (
              <div className="text-danger text-center p-5"> فیلم یافت نشد</div>
            )
        }
        </Swiper>
      </section>
    </>
  )
}

export default Main