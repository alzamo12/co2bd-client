// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import banner1 from "../../assets/gallery/banner-1.jpg"
import banner2 from "../../assets/gallery/banner-2.jpg"
import banner3 from "../../assets/gallery/banner-3.jpg"
import banner4 from "../../assets/gallery/banner-4.jpg"
import Marquee from 'react-fast-marquee';

const Gallery = () => {
    return (
        <div className='relative mt-12 lg:mt-20'>
            <h2 className="text-2xl lg:text-4xl font-bold text-center md:mb-4">Our Successful Works Till Now!! </h2>
            <Marquee
            gradientWidth={3000} 
            autoFill={true}
            className='bg-green-600 text-white font-bold absolute z-10 top-10' 
            play={true}><p>*** These are our best work and Their Photos. Hope You Like that. ***</p> &nbsp; &nbsp; &nbsp; &nbsp;</Marquee>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper md:relative md:left-1/2 md:-translate-x-1/2 md:w-screen h-[35vh] md:h-[40vh] lg:h-[80vh]"
            >
                <SwiperSlide>
                    <img className='w-full h-full' src={banner1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full h-full' src={banner2} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full h-full' src={banner3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-full' src={banner4} />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gallery;