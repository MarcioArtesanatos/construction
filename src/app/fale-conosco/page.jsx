export default function FaleConosco() {
    return (
        <div className="bg-light p-16 gap-5 flex justify-center items-center">
            <div>
                <h2 className="text-4xl text-black/75 my-10">Fale Conosco</h2>
                <form className="flex flex-col w-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded p-5">
                    <label>Nome:</label>
                    <input type="text" className="rounded" />
                    <label className="mt-5">Email:</label>
                    <input type="email" className="rounded" />
                    <label className="mt-5">Telefone:</label>
                    <input type="tel" className="rounded" />
                    <label className="mt-5">Mensagem:</label>
                    <textarea id="" cols="30" rows="10" className="rounded"></textarea>
                    <button className="flex justify-center items-center rounded w-44 mt-5 bg-white text-blue-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 transition-all duration-300 hover:text-white font-bold text-xl shadow-lg shadow-black/40 ">Enviar</button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-lg text-black/75 py-5">
                    <span className="text-primary font-bold text-xl">Horário de funcionamento:</span> segunda a sexta das 09:00 as 17:00
                </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14784.216674665224!2d-45.0602276!3d-22.1239103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb4b604e490935%3A0x5b7802bf2bccacfa!2sMarcio%20Artesanatos!5e0!3m2!1spt-BR!2sbr!4v1693331257643!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}