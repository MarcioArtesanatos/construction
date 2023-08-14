import Card from "../components/Card";
import elicoptero from "../../../public/elicoptero.jpeg"

export default function PorIdade(){
    return(
        <div className="p-16 bg-light flex justify-center items-center gap-5">
            <Card title="Caminhão" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
            <Card title="Caminhão" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
            <Card title="Caminhão" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
            <Card title="Caminhão" preco=" 10,00" precoDesc="10,00" parcela="10,00" link={elicoptero} href="compra" />
        </div>
    )
}