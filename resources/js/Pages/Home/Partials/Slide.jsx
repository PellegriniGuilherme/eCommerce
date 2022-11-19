import React from 'react'
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Slide() {

    const Navigation = () => {
        const slide = useSwiper();

        const backSlide = () => {
            slide.slidePrev();
        }

        const nextSlide = () => {
            slide.slideNext();
        }

        return (
            <div className="absolute w-full h-full z-50 top-0 flex flex-row justify-between items-center px-5">
                <div
                    className="w-8 h-8 rounded-full opacity-60 hover:opacity-100 transition-all cursor-pointer bg-zinc-100 flex justify-center items-center"
                    onClick={backSlide}
                >
                    <MdKeyboardArrowLeft/>
                </div>
                <div
                    className="w-8 h-8 rounded-full opacity-60 hover:opacity-100 transition-all cursor-pointer bg-zinc-100 flex justify-center items-center"
                    onClick={nextSlide}
                >
                    <MdKeyboardArrowRight/>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <Swiper
                className="w-full z-10 relative"
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <Navigation/>
                <SwiperSlide>
                    <img
                        src="https://s.mlcdn.com.br/banner/campanhas/0311_ADS_LargeDesk_TCLCopa_211.png"
                        className="w-full h-auto"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://s.mlcdn.com.br/banner/campanhas/1711largedeskframedinamico6.png"
                        className="w-full h-auto"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://s.mlcdn.com.br/banner/campanhas/2810largedeskfertasdatvblackcopa.png"
                        className="w-full h-auto"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide
