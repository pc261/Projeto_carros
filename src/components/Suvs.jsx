import iconSuvs from "../assets/icon-suvs.svg"
export default function Suvs(){
    return(
        <section className="bg-green p-12">
          <img src={iconSuvs} alt="Icone dos carros SUV's" className = "mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwithebg">SUVs</h2>
          <p className= "font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className= "font-lexend bg-offwithebg px-10 py-3 block w-fit rounded-3xl text-green border-2 border-offwithebg hover:bg-green hover:text-offwithebg" href="https://www.webmotors.com.br/suvs"target="_blank" >Ver mais</a>
        </section>
    )
}