"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function CarrosselCompra({ primeira, segunda, terceira, title }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 bg-red-600 !flex !flex-col"
            >
                <SwiperSlide>
                    <Image src={primeira} alt={title} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={segunda} alt={title} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={terceira} alt={title} />
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={primeira} alt={title}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={segunda} alt={title}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={terceira} alt={title}/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
