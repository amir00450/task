const object =[
    {
        id: "1",
        name:"kmc",
        price:"1.500.000",
        location:"Mashhad",
        filter:"Car",
        info:"ماشین خوبیه",
        img:"https://s100.divarcdn.com/static/photo/afra/post/b7bmtCwa-4sxmqeZqLq3NQ/C29E6394-CE2D-4901-B6BB-ADDCFE621871.jpg"
    },
    {
        id: "2",
        name:"باغ ویلای گل مینا",
        price:"4.500.000.000",
        location:"Theran",
        filter:"Home",
        info:"باغ خوبیه",
        img:"https://s100.divarcdn.com/static/photo/afra/real_estate/VsXKNQdRc_CxjSW1OEmhUw/88ee08f2-9c92-4c2a-8cfd-98c736c697fa.jpg"
    },
    {
        id: "3",
        name:"ps4",
        price:"10.000.000",
        location:"Isfahan",
        filter:"Mobile",
        info:" خوبیه",
        img:"https://s100.divarcdn.com/static/photo/afra/post/FK7ZuSVkejvwKFdpf8DfIA/12af1142-b3c3-4a7e-ab2d-ecfecfee8b54.jpg"
    },
    {
        id: "4",
        name:"ساعت برند گلکسی",
        price:"15.000.000",
        location:"Isfahan",
        filter:"Cloths",
        info:"ساعت خوبیه",
        img:"https://s100.divarcdn.com/static/photo/afra/post/0lXeaAFBW5tgMbHKGzvikA/953d0a46-dcb6-402c-b2df-6ba1833a11ae.jpg"
    }
    
]
export const getobjects = ()=>{
    return object
}
export const getFilterobject = (filter) =>{
    return object.find(book => book.filter === filter)
}