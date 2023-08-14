"use client"
import Carrossel from './components/Carrossel';
import Card from './components/Card';
import elicoptero from "../../public/elicoptero.jpeg"
import futebol from "../../public/futebol.jpeg"
import lapis from "../../public/lapis.jpeg"
import girafa from "../../public/girafa.jpeg"
import Link from 'next/link';

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
        <div className='flex justify-center items-center px-16 space-x-20'>

        </div>
        <div className=' px-16 w-full h-auto flex'>
          <div className=' w-full rounded-xl flex justify-center items-center flex-col'>
            <div className='flex gap-5'>
              <CardIdade idade="0 - 24" diaMes="Mês" link="/por-idade"/>
              <CardIdade idade="3 - 5" diaMes="Anos" link="/por-idade"/>
              <CardIdade idade="5 - 7" diaMes="Anos" link="/por-idade"/>
              <CardIdade idade="7 - 9" diaMes="Anos" link="/por-idade"/>
              <CardIdade idade="9 - 12" diaMes="Anos" link="/por-idade"/>
            </div>
            <h2 className='uppercase my-24 font-bold text-blue-500 text-2xl'>Novos Produtos</h2>
            <div className='py-5 flex flex-wrap w-full items-center justify-center'>
              <Card title="Caminhão" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
              <Card title="Helicóptero" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
              <Card title="Futebol" preco="10,00" precoDesc="10,00" parcela="10,00" link={futebol} href="compra" />
              <Card title="Girafa" preco="10,00" precoDesc="10,00" parcela="10,00" link={girafa} href="compra" />
              <Card title="Lápis" preco="10,00" precoDesc="10,00" parcela="10,00" link={lapis} href="compra" />
              
            </div>

            <h2 className='uppercase my-24 font-bold text-blue-500 text-2xl'>Mais comprados</h2>
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
    </div>
  );
}