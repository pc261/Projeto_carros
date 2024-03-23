import iconSedans from "../assets/icon-sedans.svg"
export default function Sedans(){
    return(
        <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
            <img src={iconSedans} alt="Icone dos carros Sedans"  className = "mb-7" />
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwithebg">Sendans</h2>
            <p className= "font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
            <a className= "font-lexend bg-offwithebg px-10 py-3 block w-fit rounded-3xl text-orange border-2 border-offwithebg hover:bg-orange hover:text-offwithebg" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
    )
}