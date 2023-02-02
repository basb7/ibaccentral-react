import ImagePastores from "../../assets/LeaderShip/DSC_9057.jpg"

const Members = () => {
   return(
      <div>
         <p className="text-center pt-10 text-base italic">NUESTROS</p>
         <p className="text-center font-semibold text-2xl">PASTORES</p>
         <div className="mt-5 md:block w-full md:px-10 h-auto mb-5 lg:flex">
            <div className="p-4 md:w-full lg:w-1/2">
               <img className="mx-auto h-[550px]" src={ImagePastores} alt="Imagen Miguel y Lorena" />
            </div>
            <div className="p-4 md:w-full lg:w-9/12 md:text-base md:italic lg:text-lg text-justify">
               <p className="pb-5">Bienvenido a nuestro sitio web de IBAC Central!, IBAC significa Iglesia Integral Bendición Abundante Cruzada Cristiana. Somos una casa que abre sus puertas para recibir a toda persona que anhela un cambio en su vida, somos una familia porque el amor es lo mas importante en nuestras relaciones. ¡Somos una iglesia cristiana que ama ver vidas cambiadas, a través de la predicación y aplicación de la Palabra!.</p>

               <p className="pb-5">Con un claro sí a la vida y a todo principio dado por Dios. Nuestro objetivo es inspirar a las personas a relacionarse con Jesús, para que experimenten un cambio en sus vidas, llevando y viviendo un mensaje claro y es que Jesús es la esperanza para una vida rota, una familia destruida y una sociedad caída.</p>

               <p className="pb-5">En esta iglesia predicamos la palabra como única verdad y eje principal en todo lo que hacemos, aquí tu puedes conocer a Dios y experimentar su amor a través de cada servidor, cultivar relaciones con las personas y usar tus dones y talentos. Contamos con un equipo de servidores maravilloso que busca cada día la excelencia y mostrar con su vida a Jesús.</p>

               <p>Nuestro sueño es ver una iglesia apasionada por Jesús y con vidas transformadas por el poder de Dios y su palabra, que demuestran ante el mundo que Dios es real y cambia vidas. ¡Si deseas cambiar tu vida, IBAC Central te abre sus puertas!
               </p>
            </div>
         </div>
         <div className="text-center lg:w-full lg:inline-flex lg:justify-center lg:gap-24">
            <button className="p-4 px-6 w-9/12 mb-3 bg-slate-900 hover:bg-slate-700 rounded-full text-white md:w-80"><a href="">MIGUEL RODRIGUEZ</a></button>
            <button className="p-4 px-6 w-9/12 mb-3 bg-slate-900 hover:bg-slate-700 rounded-full text-white md:w-80"><a href="">LORENA RUIZ</a></button>
            <button className="p-4 px-6 w-9/12 mb-3 bg-slate-900 hover:bg-slate-700 rounded-full text-white md:w-80"><a href="">EQUIPO DE LIDERES</a></button>
         </div>
      </div>
   )
}

export default Members