import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import ProductCard from '@/Components/ProductCard';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'swiper/css';

function SlideProducts({ title }) {

    const [perView, setPerView] = useState(4);
    const swiperRef = useRef(null);

    let rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <= 640){
                setPerView(2);
            }else if(window.innerWidth <= 768){
                setPerView(3);
            }else{
                setPerView(4);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full p-4 px-12 flex flex-col justify-center items-center relative my-5">
            <h1 className="my-3 mb-5 text-2xl font-bold text-zinc-800">{title}</h1>
            <Swiper
                className="w-full"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={perView}
                ref={swiperRef}
                modules={[Autoplay]}
            >
                {
                    rows.map((item, index) => (
                        <SwiperSlide key={`${index}_prod`}>
                            <ProductCard />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <span onClick={() => swiperRef.current.swiper.slidePrev()} className="z-10 absolute left-3 hover:opacity-80 transition-all">
                <MdKeyboardArrowLeft size={40} className="text-zinc-800 cursor-pointer"/>
            </span>
            <span onClick={() => swiperRef.current.swiper.slideNext()} className="z-10 absolute right-3 hover:opacity-80 transition-all">
                <MdKeyboardArrowRight size={40} className="text-zinc-800 cursor-pointer"/>
            </span>
        </div>
    )
}

export default SlideProducts
