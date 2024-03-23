import iconLuxury from "../assets/icon-luxury.svg"
export default function Luxury(){
    return(
        <section className = "bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="Icone dos carros de Luxo" className = "mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwithebg">Luxuosos</h2>
          <p className= "font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className= "font-lexend bg-offwithebg px-10 py-3 block w-fit rounded-3xl text-darkgreen border-2 border-offwithebg hover:bg-dark-green hover:text-offwithebg" href="https://www.webmotors.com.br/carros-de-luxo/carros/estoque?estadocidade=estoque&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::carros-de-luxo:comprar" target="_blank">Ver mais</a>
        </section> 
    )
}