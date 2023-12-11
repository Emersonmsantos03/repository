import './screen.css'

import {Swiper, SwiperSlide} from 'swiper/react'

let Screen = () =>{
    const imgs = [
        {id: '1', image: '/public/img/devs/dev1.jpg'},
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
            {imgs.map( (item) => (
              <SwiperSlide key={item.id}>
                <img
                src={item.image}
                alt='image'
                className='slide-item'/>
              </SwiperSlide>  
            ))}
        </Swiper>
        </div>


    )
}

export default Screen