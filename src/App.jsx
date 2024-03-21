import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return(
    <main className = "py-20 px-6 min-h-svh bg-offwhitebg antialiased lg:flex justify-center itens-center">
      <section className="lg:flex">

        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="Icone dos carros Sedans"  className = "mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwithebg">Sendans</h2>
          <p className= "font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className= "font-lexend bg-offwithebg px-10 py-3 block w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={iconSuvs} alt="Icone dos carros SUV's" className = "mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwithebg">SUVs</h2>
          <p className= "font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className= "font-lexend bg-offwithebg px-10 py-3 block w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs"target="_blank" >Ver mais</a>
        </div>

        <div className = "bg-dark-green p-12 rounded-b-lg">
          <img src={iconLuxury} alt="Icone dos carros de Luxo" className = "mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwithebg">Luxuosos</h2>
          <p className= "font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className= "font-lexend bg-offwithebg px-10 py-3 block w-fit rounded-3xl text-darkgreen" href="https://www.webmotors.com.br/carros-de-luxo/carros/estoque?estadocidade=estoque&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::carros-de-luxo:comprar" target="_blank">Ver mais</a>
        </div> 
        
      </section>
    </main>
  )
}