import backgroundHome from '../../assets/Images/backgroundHome.jpg'
import Members from '../members/Members'
import SocialMedia from '../social-media/SocialMedia'

const Home = () => {
   return(
      <div>
         <div className="relative">
            <div className="h-56 md:h-[450px] sature-200">
               <img className="h-full w-full" src={backgroundHome} alt="Imagen Iglesia" />
            </div>
            <div className="absolute w-full left-0 bottom-0">
               <h1 className="text-3xl text-center text-white font-bold bg-slate-900 bg-opacity-60 flex justify-center items-center h-56 md:w-full md:h-[450px] md:text-7xl">CRUZADA CRISTIANA BENDICION ABUNDANTE</h1>
            </div>
         </div>
         <div>
            <h1 className="text-stone-800 text-center text-5xl font-bold my-8 italic md:text-7xl">BIENVENIDOS!</h1>
            <p className="px-6 md:px-52 text-justify md:text-xl">Queremos ser parte del cambio que viene para tu vida. Somos la iglesia IBAC Central, una familia amada por Dios y una casa en la cual habita su presencia.</p>
            <p className="px-6 font-semibold md:px-52 mt-5 text-center md:text-xl">En este lugar puedes cambiar tu vida y aprender a vivir.</p>
         </div>
         <div className="my-5 md:inline-flex md:w-full md:justify-center mt-10">
            <div className="flex justify-center mx-2">
               <button className="py-4 px-6 bg-slate-900 hover:bg-slate-700 rounded-full text-white"><a href="">ENCUENTRANOS</a></button>
            </div>
            <div className="flex justify-center mt-4 mx-2 md:mt-0">
               <button className="p-4 px-6 bg-slate-900 hover:bg-slate-700 rounded-full text-white"><a href="">REVIVIR LA ULTIMA PREDICACION</a></button>
            </div>
         </div>
         <SocialMedia />
         <Members />
      </div>
   )
}

export default Home