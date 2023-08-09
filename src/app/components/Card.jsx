"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { useState } from "react";
import Link from "next/link";


export default function Card({ preço, link, title, href }) {

  const [isTapped, setIsTapped] = useState(false);
  const [isTapped1, setIsTapped1] = useState(false);

  const handleTap = () => {
    setIsTapped(!isTapped);
  };
  const handleTap1 = () => {
    setIsTapped1(!isTapped1)
  }
  return (
    <div className="group bg-black/5 flex flex-col w-56 h-72 p-5 rounded-xl relative felx justify-center items-center">
      <Image src={link} alt={title} height={200} className="rounded-xl" />
      <h2 className="mt-5">{title}</h2>
      <p>{preço}</p>
      <span
        className=" flex justify-center items-center bg-cyan-500/70  absolute w-full left-0 rounded-xl h-0 group-hover:h-full transition-[height] ease duration-300 "
      >
        <Link href={href}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.1 }}
          onClick={handleTap1}
        >
          <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-light font-bold mr-5">
            <FontAwesomeIcon icon={faCartPlus} className={` h-6 ${isTapped1 ? "text-yellow-500" : "text-light"} transition ease-in-out duration-300`}
            />
            Comprar
          </div>
        </Link>
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.1 }}
          onClick={handleTap}
        >
          <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-light font-bold">
            <FontAwesomeIcon icon={faHeart} className={` h-6 ${isTapped ? "text-red-500" : "text-light"} transition ease-in-out duration-300`}
            />
            Favoritar
          </div>
        </motion.button>
      </span>
    </div>
  )
}