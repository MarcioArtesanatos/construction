import Image from "next/image"
import logo from "../../../public/logo192.png"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  const data = new Date()
  const ano = data.getFullYear()

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="bg-zinc-700  flex items- justify-center p-16 text-light w-full">
        <div className="flex flex-col justify-center items-center mr-20">
          <Image src={logo} />
          <p className="w-64 text-justify text-sm mt-5 ">Descubra o incrível universo lúdico da Marcio Artezanatos! Loja especializada em produtos sustentáveis e produzidos por empresas brasileiras, resgatamos memórias e histórias, proporcionando aprendizagens significativas para todas as idades. Com jogos, brinquedos em madeira, livros e quebra-cabeças, estimulamos a imaginação, criatividade e o desenvolvimento integral das crianças. Venha explorar nosso mundo encantado e transforme o aprendizado em uma experiência mágica.</p>
        </div>
        <div className="flex flex-col justify-start space-y-5 mr-20">
          <h2 className="uppercase font-bold">Institucional</h2>
          <Link href="#" target="_blank"className="hover:text-blue-500 transition-all duration-300">Fale Conosco</Link>
          <Link href="#" target="_blank"className="hover:text-blue-500 transition-all duration-300">Política de Privaciade</Link>
          <Link href="#" target="_blank"className="hover:text-blue-500 transition-all duration-300">Nossas Políticas de troca e devolução</Link>
          <Link href="#" target="_blank"className="hover:text-blue-500 transition-all duration-300">Quem Somos?</Link>
          <Link href="#" target="_blank"className="hover:text-blue-500 transition-all duration-300">Nossa História</Link>
        </div>

        <div className="flex flex-col gap-5 mr-20">
          <Link href="#" className="hover:text-blue-500 transition-all duration-300"><FontAwesomeIcon icon={faPhone} className="text-2xl" /> Telefone:(35)3331-5656</Link>
          <Link href="#" className="hover:text-blue-500 transition-all duration-300"><FontAwesomeIcon icon={faWhatsapp} className="text-2xl " /> Whatsapp:+55 35 9121-6423</Link>
          <Link href="#" className="hover:text-blue-500 transition-all duration-300"><FontAwesomeIcon icon={faEnvelope} className="text-2xl" /> Email:marcio@gmail.com</Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
        </div>

        <div className="flex flex-col justify-start space-y-5 mr-20">
          <h2 className="uppercase font-bold">Redes Sociais</h2>
          <div className="flex gap-2">
            <Link href="#" className="text-2xl hover:text-blue-500 transition-all duration-300"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href="#" className="text-2xl hover:text-blue-500 transition-all duration-300"><FontAwesomeIcon icon={faFacebook} /></Link>
             
          </div>
        </div>

      </div>
      <div className=" bg-zinc-900 w-full text-light flex flex-col items-center justify-center text-center">
        <p className="text-sm">
          {ano}, Nome da Empresa - Todos os Direitos Reservados
        </p>
        <div className="flex">
          <p className="text-sm">Developed by&nbsp; </p>{' '}
          <a href="" className="font-bold text-light hover:text-blue-500 transition ease-in-out duration-300">
            Rixxer &trade;
          </a>
        </div>
      </div>
    </div>
  )
}