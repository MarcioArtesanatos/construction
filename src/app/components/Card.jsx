"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faShareSquare, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { useState } from "react";
import Link from "next/link";

function calculateAverageRating(ratings) {
  if (!ratings || ratings.length === 0) {
    return 0;
  }

  // const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
  const averageRating = ratings.length;
  return averageRating;
}

function StarRating({ rating }) {
  const numStars = 5;
  const filledStars = Math.floor(rating);

  const starIcons = [];
  for (let i = 0; i < numStars; i++) {
    if (i < filledStars) {
      starIcons.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    } else {
      starIcons.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-zinc-300" />
      );
    }
  }

  return <div className="flex">{starIcons}</div>;
}

export default function Card({ preco, parcela, precoDesc, link, title, href, ratings, className = "", }) {

  const averageRating = calculateAverageRating(ratings);
  const [isTapped, setIsTapped] = useState(false);
  const [isTapped1, setIsTapped1] = useState(false);

  const handleTap = () => {
    setIsTapped(!isTapped);
  };
  const handleTap1 = () => {
    setIsTapped1(!isTapped1)
  }
  return (
    <div className={`group bg-blue-100 mr-5 mb-5 md:mr-0 flex flex-col p-5 rounded-xl relative felx justify-center items-center ${className}`}>
      <div className="relative w-80 md:w-64">

        <Image src={link} alt={title} height={500} width={500} className="rounded-xl" />

        <span
          className=" flex justify-center items-center bg-gradient-to-r from-cyan-500/75 to-blue-500/75 backdrop-blur-md absolute w-full top-0 left-0 rounded-xl h-0 group-hover:h-full transition-[height] ease duration-300 "
        >

          <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.1 }}
            onClick={handleTap}
          >
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-light font-bold">
              <FontAwesomeIcon icon={faHeart} className={`h-6 ${isTapped ? "text-red-500" : "text-light"} transition ease-in-out duration-300`}
              />
              Favoritar
            </div>
          </motion.button>
        </span>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h2 className="font-bold text-zinc-800 text-xl mt-5 mb-2">
          {title}
        </h2>
        <StarRating rating={averageRating} />
        <p className="text-xl font-bold text-zinc-800 mt-5">
          R$ {preco}
        </p>
        
        {/* <p className="text-black/75 text-xs">até <span className="font-bold text-black">6x</span> de <span className="font-bold text-black">R${parcela} </span>sem juros</p>
        <p className="text-center text-sm"><span className="font-bold text-lg text-black">R${precoDesc}</span> no pix/boleto com 10% de desconto </p> */}
      </div>
      <Link href="#" target="_blank" className="bg-white px-5 py-2 text-black/75 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 border border-black/75 hover:border-white rounded mt-5 w-44 flex justify-center items-center">

        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        Comprar
      </Link>
      <Link href="#" target="_blank" className="bg-white px-5 py-2 text-black/75 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 border border-black/75 hover:border-white rounded mt-2 w-44">
        <FontAwesomeIcon icon={faShareSquare} className="mr-2" />
        Compartilhar
      </Link>
    </div>
  )
}