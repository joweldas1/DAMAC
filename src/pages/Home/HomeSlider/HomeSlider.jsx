import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './customSwiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import sliderObject from './sliderObject.json'
import images from './singleImage.json'



const HomeSlider = () => {
    return (
        <div className='w-full lg:w-4/5 mx-auto mb-10 lg:mb-20'>
            {/* --------Slider-------- */}
            <div>
                <Swiper
                loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
                {
                    sliderObject.map((d,idx)=>(
                        <SwiperSlide key={idx}>
                            <img src={d.image_url} className="w-full h-[400px] lg:h-[480px] rounded-lg" alt="" />
                        </SwiperSlide>

                    ))
                }
                </Swiper>
            </div>
            <div data-aos='flip-up' className="grid grid-cols-4 items-center w-full gap-2 md:gap-4 mt-2 md:mt-4 ">
                {
                    images.map((d,idx)=>(
                        <div key={idx} className="relative h-16 lg:h-48 overflow-hidden lg:rounded-3xl">
                            <img src={d.image_url} className="w-auto rounded-md lg:rounded-3xl lg:h-48 customShadow hover:scale-125 absolute transition-transform duration-500" alt="" />
                        </div>
                    ))
                }
            </div>
     
     
    </div>
    );
};

export default HomeSlider;