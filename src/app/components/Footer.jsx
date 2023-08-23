import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const data = new Date()
    const ano = data.getFullYear()

    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <div className="bg-primary p-16 md:p-2 md:py-5 flex md:flex-col justify-around w-screen text-light md:space-y-5">
                <div className="flex flex-col justify-center items-center mb-10 md:mb-0">
                    <Image src={logo} width={100} />
                    <p className="w-64 md:w-auto text-justify text-sm mt-5 ">Descubra o incrível universo lúdico da Marcio Artezanatos! Loja especializada em produtos sustentáveis e produzidos por empresas brasileiras, resgatamos memórias e histórias, proporcionando aprendizagens significativas para todas as idades. Com jogos, brinquedos em madeira, livros e quebra-cabeças, estimulamos a imaginação, criatividade e o desenvolvimento integral das crianças. Venha explorar nosso mundo encantado e transforme o aprendizado em uma experiência mágica.</p>
                </div>
                <div className="flex flex-col mt-0 space-y-5 md:text-center">
                    <h2 className="uppercase font-bold">Institucional</h2>
                    <Link href="fale-conosco"
                        className="hover:text-light transition-all duration-300">
                        Fale Conosco
                    </Link>
                    <Link href="/politica-de-privacidade" className="hover:text-light transition-all duration-300">
                        Política de Privaciade
                    </Link>
                    <Link href="politica-de-troca-devolucao" className="hover:text-light transition-all duration-300">
                        Nossas Políticas de troca e devolução
                    </Link>
                    <Link href="quem-somos"
                        className="hover:text-light transition-all duration-300">
                        Quem Somos?
                    </Link>
                </div>

                <div className="flex flex-col justify-start md:items-center text-center">
                    <Link href="https://wa.me/5535998647172" target="_blank" className="flex hover:text-light transition-all duration-300">

                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl h-6 mr-2" />
                        +55 35 9864-7172
                    </Link>
                </div>

                <div className="flex flex-col justify-center items-center gap-5">
                </div>

                <div className="flex flex-col md:justify-center md:items-center  space-y-5">
                    <h2 className="uppercase font-bold">Redes Sociais</h2>
                    <div className="flex gap-2">
                        <Link href="https://www.instagram.com/queijofazendasantoantonio/" target="_blank" className="text-light text-2xl hover:text-light transition-all duration-300 w-5"><FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="https://www.facebook.com/queijofazendasantoantonio/" target="_blank" className="text-light text-2xl hover:text-light transition-all duration-300 w-6"><FontAwesomeIcon icon={faFacebook} />
                        </Link>

                    </div>
                </div>

            </div>
            <div className="pt-5 text-light flex flex-col items-center justify-center text-center bg-primaryDark w-screen">
                <p className="text-xs ">
                    Fazenda-CNPJ: 0000000000000000000000000 Todos os Direitos Reservados, {ano}
                </p>
                <div className="flex">
                    <p className="text-sm">Developed by&nbsp; </p>{' '}
                    <a href="" className="font-bold text-light hover:text-secondary transition ease-in-out duration-300">
                        Rixxer &trade;
                    </a>
                </div>
            </div>
        </div>
    )
}