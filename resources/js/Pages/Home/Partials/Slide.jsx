import React, { useState } from 'react'
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Transition } from '@headlessui/react';
import 'swiper/css';

function Slide() {

    const [navigator, setNavigator] = useState(false);

    const Navigation = ({ navigatorShow }) => {
        const slide = useSwiper();

        const backSlide = () => {
            slide.slidePrev();
        }

        const nextSlide = () => {
            slide.slideNext();
        }

        return (
            <Transition show={navigatorShow} appear={true}>
                <div className="absolute w-full h-full z-50 top-0 flex flex-row justify-between items-center px-5">
                    <Transition.Child
                        enter="transition ease-in-out duration-400 transform"
                        enterFrom="-translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        leave="transition ease-in-out duration-400 transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="-translate-x-full opacity-0"
                    >
                        <div
                            className="w-8 h-8 rounded-full opacity-60 hover:opacity-100 transition-all cursor-pointer bg-zinc-100 flex justify-center items-center"
                            onClick={backSlide}
                            >
                            <MdKeyboardArrowLeft/>
                        </div>
                    </Transition.Child>
                    <Transition.Child
                        enter="transition ease-in-out duration-400 transform"
                        enterFrom="translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        leave="transition ease-in-out duration-400 transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="translate-x-full opacity-0"
                    >
                        <div
                            className="w-8 h-8 rounded-full opacity-60 hover:opacity-100 transition-all cursor-pointer bg-zinc-100 flex justify-center items-center"
                            onClick={nextSlide}
                        >
                            <MdKeyboardArrowRight/>
                        </div>
                    </Transition.Child>
                </div>
            </Transition>
        )
    }

    return (
        <div
            className="w-full"
            onMouseEnter={() => setNavigator(true)}
            onMouseLeave={() => setNavigator(false)}
        >
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
                <Navigation navigatorShow={navigator}/>
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
