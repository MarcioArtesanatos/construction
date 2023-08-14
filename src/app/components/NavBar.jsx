"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/logo192.png"


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
        <div>
          <Link href="/" target="_blank" className="mr-4">lorem</Link>
          <Link href="/" target="_blank" className="mx-4">lorem</Link>
          <Link href="/" target="_blank" className="mx-4">lorem</Link>
        </div>
        <Image src={logo} alt="logo da empresa" className=" w-auto absolute left-[40%]"/>
        <div>
          <Link href="/" target="_blank" className="ml-4">lorem</Link>
          <Link href="/" target="_blank" className="mx-4">lorem</Link>
          <Link href="/" target="_blank" className="mx-4">lorem</Link>
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