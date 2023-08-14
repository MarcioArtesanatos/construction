"use client"
import Carrossel from './components/Carrossel';
import Card from './components/Card';
import elicoptero from "../../public/elicoptero.jpeg"
import futebol from "../../public/futebol.jpeg"
import lapis from "../../public/lapis.jpeg"
import girafa from "../../public/girafa.jpeg"
import foguete from "../../public/foguete.jpg"
export default function Home() {
  return (
    <div className="">
     
      <Carrossel />
      <main className='bg-light w-full  py-20'>
        <div className='flex justify-center items-center px-16 space-x-20'>
          <div className='rounded-xl p-5 shadow-md shadow-blue-500'>

            <h2 className='uppercase pb-2 font-bold'>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam reiciendis nesciunt aspernatur accusantium facilis, voluptatibus atque quia ratione iusto nobis fugit, non quam. Sunt aut fuga ad debitis dolor?
            </p>
          </div>
          <div className='rounded-xl p-5 shadow-md shadow-yellow-500'>

            <h2 className='uppercase pb-2 font-bold'>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam reiciendis nesciunt aspernatur accusantium facilis, voluptatibus atque quia ratione iusto nobis fugit, non quam. Sunt aut fuga ad debitis dolor?
            </p>
          </div>
          <div className='rounded-xl p-5 shadow-md shadow-green-500'>

            <h2 className='uppercase pb-2 font-bold'>Lorem</h2>
            <p className='drop-shadow-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam reiciendis nesciunt aspernatur accusantium facilis, voluptatibus atque quia ratione iusto nobis fugit, non quam. Sunt aut fuga ad debitis dolor?
            </p>
          </div>
        </div>
        <div className=' px-16 w-full h-auto flex mt-10'>
          <div className='bg-black/5 w-1/4 mr-5 rounded-xl p-5'>
            menu
          </div>
          <div className=' w-full rounded-xl'>

            <h2 className='uppercase'>Novos Produtos</h2>
            <div className='py-5 flex gap-5 flex-wrap w-full items-center justify-center'>
              <Card title="Caminhão" preço=" R$ 10,00" link={elicoptero} href="compra"/>
              <Card title="Elicoptero" preço=" R$ 10,00" link={elicoptero} href="compra"/>
              <Card title="Futebol" preço=" R$ 10,00" link={futebol} href="compra"/>
              <Card title="Girafa" preço=" R$ 10,00" link={girafa} href="compra"/>
              <Card title="Lápis" preço=" R$ 10,00" link={lapis} href="compra"/>
              <Card title="Foguete" preço=" R$ 10,00" link={foguete} href="compra"/>
            </div>
            
            <h2 className='uppercase'>Mais comprados</h2>
            <div className='py-5 flex gap-5 flex-wrap w-full items-center justify-center'>
            <Card title="Caminhão" preço=" R$ 10,00" link={elicoptero} href="compra"/>
              <Card title="Elicoptero" preço=" R$ 10,00" link={elicoptero} href="compra"/>
              <Card title="Futebol" preço=" R$ 10,00" link={futebol} href="compra"/>
              <Card title="Girafa" preço=" R$ 10,00" link={girafa} href="compra"/>
              <Card title="Lápis" preço=" R$ 10,00" link={lapis} href="compra"/>
              <Card title="Foguete" preço=" R$ 10,00" link={foguete} href="compra"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}