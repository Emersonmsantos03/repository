import './screen.css'
import image1 from '/public/img/devs/dev1.jpg'
import image2 from '/public/img/devs/dev2.jpg'
import image3 from '/public/img/devs/dev3.jpg'
import image4 from '/public/img/devs/dev4.jpg'
import image5 from '/public/img/devs/dev5.jpg'


import {Swiper, SwiperSlide} from 'swiper/react'

let Screen = () =>{
    const imgs = [
        {id: '1', image: image1},
        {id: '2', image: image2},
        {id: '3', image: image3},
        {id: '4', image: image4},
        {id: '5', image: image5}
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