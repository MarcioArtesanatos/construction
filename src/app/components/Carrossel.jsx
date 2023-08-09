"use client"
import girafa from "../../../public/girafa.jpeg"
import elicoptero from "../../../public/elicoptero.jpeg"
import futebol from "../../../public/futebol.jpeg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


export default function Carrossel() {
  return (
    <div className="pb-10">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',

        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[90%] h-[500px] mt-10"
        style={{
          // Adicione o estilo inline para alterar a cor da bolinha de paginação
          "--swiper-pagination-color": "#f5f5f5",
        }}
      >
        <div className="swiper-button-prev" style={{ color: "#f5f5f5" }}>
          {/* Coloque um ícone ou texto para representar o botão prev */}

        </div>
        <div className="swiper-button-next" style={{ color: "#f5f5f5" }}>
          {/* Coloque um ícone ou texto para representar o botão next */}

        </div>
        <SwiperSlide className='!flex !justify-center !items-center gap-36'>
        <div className="flex flex-col gap-5 ml-20">
            <h2 className="text-light font-bold text-7xl">Brinquedo X</h2>
            <button className="bg-light rounded-lg w-44">Preço</button>
          </div>
          <Image src={girafa} alt='brinquedo' width={400} className="" />
        </SwiperSlide>
        <SwiperSlide className='!flex !justify-center !items-center gap-44'>
          <div className="flex flex-col gap-5 ml-20">
            <h2 className="text-light font-bold text-7xl">Brinquedo X</h2>
            <button className="bg-light rounded-lg w-44">Preço</button>
          </div>
          <Image src={elicoptero} alt='brinquedo' width={400} />
        </SwiperSlide>
        <SwiperSlide className='!flex !justify-center !items-center gap-44'>
          <div className="flex flex-col gap-5 ml-20">
            <h2 className="text-light font-bold text-7xl">Brinquedo X</h2>
            <button className="bg-light rounded-lg w-44">Preço</button>
          </div>
          <Image src={futebol} alt='brinquedo' width={400} />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}