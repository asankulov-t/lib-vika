import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
// Import Swiper styles

import './swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import styled from 'styled-components';



// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
const Slider = () => {
  return (
    <div>
      <Swiper
      modules={[Navigation,  Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1612648545825-e820086cbef3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)`,
                backgroundRepeat: 'no-repeat',
                height:'500px', backgroundSize: 'cover'}}>Slide 1</SwiperSlide>
      <SwiperSlide style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)`,
                backgroundRepeat: 'no-repeat',
                height:'500px', backgroundSize: 'cover'}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1514593214839-ce1849100055?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774)`,
                backgroundRepeat: 'no-repeat',
                height:'500px', backgroundSize: 'cover'}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)`,
                backgroundRepeat: 'no-repeat',
                height:'500px', backgroundSize: 'cover'}}>Slide 4</SwiperSlide>

    </Swiper>
    </div>
  )
}

export default Slider