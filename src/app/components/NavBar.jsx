"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/logo192.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();


  return (
    <Link href={href} className={`${className} group relative z-10 text-light font-bold`}>
      {title}
      <span
        className={`h-px inline-block bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <div className=" px-16">
      <div className="flex justify-between items-center px-5  bg-light  rounded-3xl mt-10 relative">
        <div className="space-x-5">
          <Link href="#" className="text-2xl text-black/75 hover:text-blue-500 transition-all duration-300"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href="#" className="text-2xl text-black/75 hover:text-blue-500 transition-all duration-300"><FontAwesomeIcon icon={faFacebook} /></Link>
        </div>
        <Image src={logo} alt="logo da empresa" className=" w-auto absolute left-[40%]" />
        <div>
          <Link href="#" className="flex justify-center items-center hover:text-blue-500 transition-all duration-300 text-black/75"><FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-2" />+55 35 9121-6423</Link>
        </div>
      </div>
      <div className="w-full flex justify-between items-center rounded-xl mt-5 pb-5">
        <nav>
          <CustomLink href="/" title="Inicio" className="ml-4" />
          <CustomLink href="/" title="Sobre" className="mx-4" />
          <CustomLink href="/" title="Lorem" className="mx-4" />
          <CustomLink href="/" title="Lorem" className="mx-4" />
        </nav>
        <nav>
          <CustomLink href="/" title="Inicio" className="mx-4" />
          <CustomLink href="/" title="Sobre" className="mx-4" />
          <CustomLink href="/" title="Lorem" className="mx-4" />
          <CustomLink href="/" title="Lorem" className="mr-4" />
        </nav>
      </div>
    </div>
  )
}