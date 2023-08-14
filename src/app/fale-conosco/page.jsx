export default function FaleConosco() {
    return (
        <div className="bg-light p-16 flex flex-col justify-center items-center">
            <h2 className="text-4xl text-black/75 my-10">Fale Conosco</h2>
            <form className="flex flex-col w-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded p-5">
                <label>Nome:</label>
                <input type="text" className="rounded"/>
                <label className="mt-5">Email:</label>
                <input type="email" className="rounded"/>
                <label className="mt-5">Telefone:</label>
                <input type="tel" className="rounded"/>
                <label className="mt-5">Mensagem:</label>
                <textarea id="" cols="30" rows="10" className="rounded"></textarea>
                <button className="flex justify-center items-center rounded w-44 mt-5 bg-white text-blue-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 transition-all duration-300 hover:text-white font-bold text-xl shadow-lg shadow-black/40 ">Enviar</button>
            </form>

        </div>
    )
}