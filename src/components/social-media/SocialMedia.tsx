import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const SocialMedia = () => {
   return(
      <div>
         <div className="w-full h-60 border mt-12 bg-gray-900">
            <p className="text-center text-white pt-10 text-base italic">MANTENTE</p>
            <p className="text-center text-white font-semibold text-2xl">CONECTADO</p>
            <div className="flex justify-center gap-3 mt-10">
               <a href="" className="rounded-full" style={{background: "white"}}>
                  <FaFacebook size={60} color={"#3982E4"} />
               </a>
               <a href="" className="rounded-full p-2" style={{background: "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)"}}>
                  <FaInstagram size={42} color={"white"}/>
               </a>
               <a href="" className="rounded-full p-2" style={{background: "#FF0000"}}>
                  <FaYoutube size={45} color={"white"}/>
               </a>
               <a href="" className="rounded-full p-2" style={{background: "#49CA58"}}>
                  <FaWhatsapp size={45} color={"white"}/>
               </a>
            </div>
         </div>
      </div>
   )
}

export default SocialMedia