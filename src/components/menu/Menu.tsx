import { useEffect } from "react"
import logo from "../../assets/Images/LOGO_CENTRAL.png"
import { FaBars } from 'react-icons/fa' 

interface Props {
   scrollBar: boolean
}

const Menu = ({scrollBar}: Props) => {

   const handleClick = () => {
      const menu = document.getElementById("menu")
      menu?.classList.toggle("collapse")
   }

   useEffect(()=>{
      const navbar = document.getElementById("navbar")
      const menu = document.getElementById("menu")

      if(scrollBar){
         navbar?.classList.remove("md:bg-transparent")
         navbar?.classList.add("md:bg-slate-800")
         menu?.classList.add("md:bg-slate-800")
      }else{
         navbar?.classList.remove("md:bg-slate-800")
         navbar?.classList.add("md:bg-transparent")
         menu?.classList.remove("md:bg-slate-800")
      }
   },[scrollBar])
   
   return(
      <div>
         <nav className="h-14 w-full bg-slate-800 md:bg-transparent opacity-95 fixed z-10" id="navbar">
            <div className="flex justify-between md:justify-center pt-2">
               <a href="#"><img className="w-24" src={logo} alt="Logo IBACC" /></a>
               <div className="md:hidden">
                  <button className="flex items-center p-1" onClick={handleClick}>
                     <FaBars className="p-1 border-2 border-gray-500 rounded" size={30} color={"white"} />
                  </button>
               </div>
            </div>
            <div className="flex bg-slate-800 text-white md:bg-transparent justify-center w-full md:visible collapse" id="menu">
               <ul className="md:flex py-3">
                  <li className="py-2 md:mx-0 md:text-sm text-center hover:underline hover:cursor-pointer"><a className="px-5 py-2 hover:bg-slate-300 hover:text-slate-800 hover:rounded-full hover:font-semibold" href="">NOSOTROS</a></li>
                  <li className="py-2 md:mx-0 md:text-sm text-center hover:underline hover:cursor-pointer"><a className="px-5 py-2 hover:bg-slate-300 hover:text-slate-800 hover:rounded-full hover:font-semibold" href="">UBICACION</a></li>
                  <li className="py-2 md:mx-0 md:text-sm text-center hover:underline hover:cursor-pointer"><a className="px-5 py-2 hover:bg-slate-300 hover:text-slate-800 hover:rounded-full hover:font-semibold" href="">EN VIVO</a></li>
                  <li className="py-2 md:mx-0 md:text-sm text-center hover:underline hover:cursor-pointer"><a className="px-5 py-2 hover:bg-slate-300 hover:text-slate-800 hover:rounded-full hover:font-semibold" href="">EVENTOS</a></li>
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default Menu