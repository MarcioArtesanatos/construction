"use client"
import React, { useEffect, useState } from "react";
import Card from './components/Card';
import bgCrianca from "../../public/bgCrianca.jpg"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faShield, faShieldAlt, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Blog from './components/Blog';
import Despoimentos from './components/Depoimentos';
import Image from 'next/image';

import { db } from "../../config/firebase"
import { collection, getDocs } from 'firebase/firestore';

function DatabaseRead({ currentPage, itemsPerPage }) {
  const [produto, setProduto] = useState([]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    async function fetchData() {
      try {
        async function getProduto() {
          const dataCollection = collection(db, "produtos");
          const dataSnapshot = await getDocs(dataCollection);
          const dataList = dataSnapshot.docs.map((doc) => doc.data());
          setProduto(dataList.slice(startIndex, endIndex)); // Filtra os itens da página atual
        }
        getProduto();
      } catch (error) {
        console.error("Erro:", error);
      }
    }

    fetchData();
  }, [currentPage]);

  return (
    <div className='flex flex-wrap'>
      {produto.map((item) => {
        if (Array.isArray(item.imagens) && item.imagens.length > 0) {
          const primeiroLink = item.imagens[0];
          return (
            <Card
              key={item.id}
              title={item.produto}
              preco={item.valor}
              link={primeiroLink}
              ratings={item.avaliacao}
              href="/compra"
            />
          );
        }
      })}
    </div>
  );
}

const CardIdade = ({ idade, diaMes, link }) => {
  return (
    <Link href={link} className='border-dashed border-4 border-blue-500 hover:border-white text-blue-500 p-10 md:p-2 text-4xl text-center font-black font-lobster hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all duration-300 md:first-letter md:flex md:gap-2'>
      <h2>{idade}</h2>
      <p>{diaMes}</p>
    </Link>
  )
}

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="pagination space-x-5 ">
      {pages.map((page) => (
       <button
       key={page}
       onClick={() => setCurrentPage(page)}
       className={`px-4 py-2 rounded-full mr-2 
         ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-200'}
       `}
     >
       {page}
     </button>
      ))}
    </div>
  );
};



export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchTotalItems() {
      try {
        const dataCollection = collection(db, "produtos");
        const dataSnapshot = await getDocs(dataCollection);
        const totalItems = dataSnapshot.docs.length;
        const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error("Erro ao obter total de itens:", error);
      }
    }

    fetchTotalItems();
  }, []);

  return (
    <div className="relative">
      <div className='w-screen'>
        <Image src={bgCrianca} alt='desenho de crianças brincando com brinquedos de madeira' className='opacity-70' />
      </div>

      <main className='bg-light w-full pt-10'>
        <div className='flex md:flex-col justify-center items-center gap-5 '>
          {/* ... */}

          <div className=' mb-16 flex justify-center items-center border border-solid rounded-lg border-primaryDark px-10 py-5'>
            <FontAwesomeIcon icon={faTruckFast} className='h-10 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-3xl flex'>Entrega Rápida</h2>
              <p className='text-black/75 text-sm -mt-1 text-center'>Para todo Brasil</p>
            </div>
          </div>
          <div className=' mb-16 flex justify-center items-center px-10 py-5 border border-solid rounded-lg border-primaryDark'>
            <FontAwesomeIcon icon={faCreditCard} className='h-10 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-3xl'>Parcelamento</h2>
              <p className='text-black/75 text-sm -mt-1 text-center'>Em até 6x sem juros</p>
            </div>
          </div>
          <div className=' mb-16 flex justify-center items-center px-10 py-5 border border-solid rounded-lg border-primaryDark'>
            <FontAwesomeIcon icon={faShieldAlt} className='h-10 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-3xl'>Loja Segura</h2>
              <p className='text-black/75 text-sm -mt-1 text-center'>Selo SSL de proteção</p>
            </div>
          </div>
        </div>

        <div className='px-16 md:px-5 w-full h-auto flex text-center'>

          <div className=' w-full rounded-xl flex justify-center items-center flex-col'>
            <h2 className='text-black/75 font-bold py-10 text-4xl '>
              Compre por Categoria
            </h2>
            <div className='flex md:flex-col gap-5'>
              <CardIdade idade="0 - 24" diaMes="Mês" link="/por-idade" />
              <CardIdade idade="3 - 5" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="5 - 7" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="7 - 9" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="9 - 12" diaMes="Anos" link="/por-idade" />
            </div>

            <div className='bg-gradient-to-r w-screen mt-10'>
              <h2 className='uppercase mt-24 text-black/75 font-bold pb-10 text-4xl '>
                Produtos
              </h2>
              <div className='py-5 flex flex-wrap justify-center'>
                <DatabaseRead currentPage={currentPage} itemsPerPage={itemsPerPage} />
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <h2 className='uppercase mt-24 text-black/75 font-bold py-10 text-4xl '>
              Mais comprados
            </h2>
            <div className='py-5 flex flex-wrap w-full items-center justify-center'>

            </div>
          </div>
        </div>
      </main>

      <div className='flex flex-col w-screen justify-center items-center p-16 bg-primaryDark'>
        <h2 className='text-4xl text-white font-bold pb-10'>Depoimentos</h2>
        <div className='flex gap-5 flex-wrap justify-center'>
          <Despoimentos
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore quasi voluptas?"
            name="José lorem Y"
            cidade="São Lourenço"
          />
          <Despoimentos
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore quasi voluptas?"
            name="José lorem Y"
            cidade="São Lourenço"
          />
          <Despoimentos
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore quasi voluptas?"
            name="José lorem Y"
            cidade="São Lourenço"
          />
        </div>
      </div>

      <div className='flex flex-col w-screen justify-center items-center p-16'>
        <h2 className='text-4xl text-black/75 font-bold'>Blog</h2>
        <div className='flex flex-wrap justify-center'>
          <Blog
            title="lorem"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cupiditate delectus odio architecto repudiandae officia expedita, quia, minima debitis voluptas nesciunt est et animi libero aperiam similique dicta. Cum, amet?"
          />
          <Blog
            title="lorem"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cupiditate delectus odio architecto repudiandae officia expedita, quia, minima debitis voluptas nesciunt est et animi libero aperiam similique dicta. Cum, amet?"
          />
          <Blog
            title="lorem"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cupiditate delectus odio architecto repudiandae officia expedita, quia, minima debitis voluptas nesciunt est et animi libero aperiam similique dicta. Cum, amet?"
          />
        </div>
      </div>
    </div>
  );
}
