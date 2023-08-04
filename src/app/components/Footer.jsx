export default function Footer() {

  const data = new Date()
  const ano = data.getFullYear()

  return (
    <div>
      <div className="bg-zinc-700 p-16 flex justify-center items-center gap-20 text-light">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="uppercase font-bold">Lorem lorem</h2>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="uppercase font-bold">Lorem lorem</h2>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="uppercase font-bold">Lorem lorem</h2>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
      </div>
      <div className=" bg-zinc-900 text-light flex flex-col items-center justify-center text-center">
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