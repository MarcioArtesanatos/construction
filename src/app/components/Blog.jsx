import Image from "next/image";
import Link from "next/link";

export default function Blog({ link, title, text }) {
    return (
        <div className="mr-5 mt-10 flex justify-center items-center rounded">
            <div className="w-72 flex flex-col justify-center items-center bg-light rounded">
                <Image src={link} className="rounded"/>
                <div className="text-2xl font-bold text-center">{title}</div>
                <div className="text-black/75 text-center px-4 text-sm">{text}</div>
                <Link href="#" target="_blank" 
                className="w-44 flex bg-white px-5 py-2 text-black/75 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 border border-black/75 hover:border-white rounded mt-10 text-center mb-2">
                    Continuar Lendo
                </Link>
            </div>
        </div>
    )
}