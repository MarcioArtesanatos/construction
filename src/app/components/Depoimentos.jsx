import Image from "next/image";

export default function Despoimentos({ text, foto, name, cidade }) {
    return (
        <div className="w-72 line bg-light/40 backdrop-blur-md rounded flex flex-col justify-center items-center p-5 mr-5">
            <h2 className="text-xl font-bold text-white">"<span className="text-black/75 text-sm font-normal">{text}</span>"</h2>
            <Image src={foto} className="w-44 my-2" />
            <h2>{name} - {cidade}</h2>

        </div>
    )
}