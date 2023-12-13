import './screen.css'

import {Swiper, SwiperSlide} from 'swiper/react'

let Screen = () =>{
    const imgs = [
        {id: '1', image: '/public/img/devs/dev1.jpg', link:'https://organodeveloper.web.app/'},
        {id: '2', image: '/public/img/devs/dev2.jpg'},
        {id: '3', image: '/public/img/devs/dev3.jpg'},
        {id: '4', image: '/public/img/devs/dev4.jpg'},
        {id: '5', image: '/public/img/devs/dev5.jpg'}
    ]
    return (
            <div className='screen'>
        <h1 className='screen-title'>Principais projetos</h1>


        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
        
        >
            {imgs.map( ({image, link, id}) => (
              <SwiperSlide key={id}>
                <img
                src={image}
                alt={id}
                a={link}
                className='slide-item'/>
              </SwiperSlide>  
            ))}
        </Swiper>
        </div>


    )
}

export default Screen