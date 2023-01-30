import { useEffect } from "react"
import logo from "../../assets/Images/LOGO_CENTRAL.png"
import { FaBars } from 'react-icons/fa' 

const Menu = ({scrollBar}) => {

   const handleClick = () => {
      const menu = document.getElementById("menu")
      menu?.classList.toggle("collapse")
   }

   useEffect(()=>{
      const navbar = document.getElementById("navbar")
      const menu = document.getElementById("menu")
      const gg = document.getElementById("gg")
      console.log(navbar)
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
         <nav className="h-11 w-full bg-slate-800 md:bg-transparent fixed z-10" id="navbar">
            <div className="flex justify-between md:justify-center">
               <a href="#"><img className="w-24" src={logo} alt="Logo IBACC" /></a>
               <div className="md:hidden">
                  <button className="flex items-center p-1" onClick={handleClick}>
                     <FaBars className="p-1 border-2 border-gray-500 rounded" size={30} color={"white"} />
                  </button>
               </div>
            </div>
            <div className="bg-slate-800 text-white md:bg-transparent flex justify-center w-full md:visible collapse" id="menu">
               <ul className="md:flex py-5">
                  <li className="md:mx-6 md:text-lg text-center hover:underline hover:cursor-pointer">NOSOTROS</li>
                  <li className="md:mx-6 md:text-lg text-center hover:underline hover:cursor-pointer">UBICACION</li>
                  <li className="md:mx-6 md:text-lg text-center hover:underline hover:cursor-pointer">EN VIVO</li>
                  <li className="md:mx-6 md:text-lg text-center hover:underline hover:cursor-pointer">EVENTOS</li>
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default Menu