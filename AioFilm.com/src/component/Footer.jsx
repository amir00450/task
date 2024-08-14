import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer() {
  return (
    <>
        <div className='mt-5'>
            <div dir='rtl' className='row w-100 bg-warning fw-bold' style={{padding: "3% 13%", fontSize: "80%"}}>
            آیوفیلم یکی از متفاوت ترین رسانه های سرگرمی کشور در زمینه فیلم ، انیمه و سریال است که با ایده ای نوین و طیف وسیع موضوعات مطالب سعی در ارائه هر گونه محتوا برای مخاطبان خود دارد. انواع فیلم خارجی ، انیمه ژاپنی ، سریال کره ای و سریال ترکی به صورت اختصاصی ، لینک های دانلود رایگان با کیفیت عالی ، نسخه زبان اصلی و همچنین جستجوی زیر نویس فارسی هر فیلم ، سریال و انیمه را می توانید در آیوفیلم انجام دهید.
            </div>
            <div dir='rtl' className='row w-100'style={{padding: "3% 10%"}}>
                <div className='col-3'>
                    <ul className='text-secondary fw-bold'style={{fontSize: "80%"}}>
                        <li>درخواست فیلم و سریال</li>
                        <li className='mt-2'>انتقاد و پیشنهاد</li>
                        <li className='mt-2'>گزارش خرابی و مشکل</li>
                    </ul>
                </div>
                <div className='col'>
                <ul className='text-secondary fw-bold'style={{fontSize: "80%"}}>
                        <li>آیوترند</li>
                        <li className='mt-2'>تبلیغات</li>
                        <li className='mt-2'>DMCA</li>
                    </ul>
                </div>
                <div className='col-2 position-relative' style={{fontSize:"70%"}}>
                    <div dir='ltr' className='bg-success p-2 h-50 rounded-3'>
                        <i className='pe-4 fs-3 fa-brands fa-android pt-1'></i>
                        <div className='position-absolute' style={{top:"9%", left:"35%"}}>
                        <span className=''>دریافت از</span><br />
                        <span className=''>google play</span>
                        </div>
                    </div>
                    <div dir='ltr' className='bg-primary p-2 h-50 rounded-3 mt-1'>
                        <i className='pe-4 fs-3 fa-brands fa-apple pt-1'></i>
                        <div className='position-absolute' style={{top:"62%", left:"35%"}}>
                        <span className=''>دریافت از</span><br />
                        <span className=''>app store</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer