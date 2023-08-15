"use client"
import Carrossel from './components/Carrossel';
import Card from './components/Card';
import elicoptero from "../../public/elicoptero.jpeg"
import futebol from "../../public/futebol.jpeg"
import lapis from "../../public/lapis.jpeg"
import girafa from "../../public/girafa.jpeg"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faShield, faShieldAlt, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Blog from './components/Blog';
import Despoimentos from './components/Depoimentos';

const CardIdade = ({ idade, diaMes, link }) => {
  return (
    <Link href={link} className='border-dashed border-4 border-blue-500 hover:border-white text-blue-500 p-10 text-4xl text-center font-black font-lobster hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all duration-300'>
      <h2>{idade}</h2>
      <p>{diaMes}</p>
    </Link>
  )
}


export default function Home() {
  return (
    <div className="">

      <Carrossel />
      <main className='bg-light w-full  py-20'>
        <div className='flex justify-center items-center'>

          <div className=' mx-16 mb-16  flex justify-center items-center'>
            <FontAwesomeIcon icon={faTruckFast} className='h-6 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-lg'>Entrega Rápida</h2>
              <p className='text-black/75 text-sm -mt-1'>Para tado Brasil</p>
            </div>
          </div>
          <div className='mx-16 mb-16 flex justify-center items-center'>
            <FontAwesomeIcon icon={faCreditCard} className='h-6 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-lg'>Parcelamento</h2>
              <p className='text-black/75 text-sm -mt-1'>Em até 6x sem juros</p>
            </div>
          </div>
          <div className='mx-16 mb-16 flex justify-center items-center'>
            <FontAwesomeIcon icon={faShieldAlt} className='h-6 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-lg'>Loja Segura</h2>
              <p className='text-black/75 text-sm -mt-1'>Selo SSL de proteção</p>
            </div>
          </div>
        </div>

        <div className=' px-16 w-full h-auto flex'>

          <div className=' w-full rounded-xl flex justify-center items-center flex-col'>
            <h2 className='text-black/75 font-bold py-10 text-4xl '>Compre por Categoria</h2>
            <div className='flex gap-5'>
              <CardIdade idade="0 - 24" diaMes="Mês" link="/por-idade" />
              <CardIdade idade="3 - 5" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="5 - 7" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="7 - 9" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="9 - 12" diaMes="Anos" link="/por-idade" />
            </div>
            <h2 className='uppercase mt-24 text-black/75 font-bold py-10 text-4xl '>Novos Produtos</h2>
            <div className='py-5 flex flex-wrap w-full items-center justify-center'>
              <Card title="Caminhão" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
              <Card title="Helicóptero" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
              <Card title="Futebol" preco="10,00" precoDesc="10,00" parcela="10,00" link={futebol} href="compra" />
              <Card title="Girafa" preco="10,00" precoDesc="10,00" parcela="10,00" link={girafa} href="compra" />
              <Card title="Lápis" preco="10,00" precoDesc="10,00" parcela="10,00" link={lapis} href="compra" />
            </div>

            <h2 className='uppercase mt-24 text-black/75 font-bold py-10 text-4xl '>Mais comprados</h2>
            <div className='py-5 flex flex-wrap w-full items-center justify-center'>
              <Card title="Caminhão" preco="10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
              <Card title="Elicoptero" preco="10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
              <Card title="Futebol" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={futebol} href="compra" />
              <Card title="Girafa" preco="10,00" precoDesc="10,00" parcela="10,00" link={girafa} href="compra" />
              <Card title="Lápis" preco="10,00" precoDesc="10,00" parcela="10,00" link={lapis} href="compra" />
            </div>
          </div>
        </div>
      </main>
      <div className='flex flex-col w-screen justify-center items-center p-16'>
        <h2 className='text-4xl text-black/75 font-bold py-5'>Depoimentos</h2>
        <div className='flex flex-wrap justify-center'>
          <Despoimentos
            text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore quasi voluptas? "
            foto={elicoptero}
            name="José lorem Y"
            cidade="São Lourenço"
          />
          <Despoimentos
            text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore quasi voluptas? "
            foto={elicoptero}
            name="José lorem Y"
            cidade="São Lourenço"
          />
          <Despoimentos
            text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore quasi voluptas? "
            foto={elicoptero}
            name="José lorem Y"
            cidade="São Lourenço"
          />
        </div>
      </div>

      <div className='flex flex-col w-screen justify-center items-center p-16'>
        <h2 className='text-4xl text-black/75 font-bold'>Blog</h2>
        <div className='flex flex-wrap justify-center'>
          <Blog
            link={lapis}
            title="lorem"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cupiditate delectus odio architecto repudiandae officia expedita, quia, minima debitis voluptas nesciunt est et animi libero aperiam similique dicta. Cum, amet?"
          />
          <Blog
            link={lapis}
            title="lorem"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cupiditate delectus odio architecto repudiandae officia expedita, quia, minima debitis voluptas nesciunt est et animi libero aperiam similique dicta. Cum, amet?"
          />
          <Blog
            link={lapis}
            title="lorem"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cupiditate delectus odio architecto repudiandae officia expedita, quia, minima debitis voluptas nesciunt est et animi libero aperiam similique dicta. Cum, amet?"
          />
        </div>
      </div>
    </div>
  );
}