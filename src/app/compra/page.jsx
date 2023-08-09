
import image from '../../../public/foguete.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CarrosselCompra from '../components/CarrosselCompra';

export default function Compra() {
  return (
    <div className="p-16">
      <div className="flex bg-white/10 rounded-lg p-10">
        <div className="flex items-center justify-center w-1/2 h-full">
          <CarrosselCompra primeira={image} segunda={image} terceira={image} title="foto de um foguete"/>
        </div>
        <div className="w-1/2 text-white">
          <h2 className="text-2xl py-5 border-b ">Foguete</h2>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure beatae quod cumque numquam possimus dolorum dicta voluptates facere eaque, minima cum quidem odit officiis magni rerum quis tempore dolores vero.</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}