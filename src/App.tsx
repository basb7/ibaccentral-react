import { useState, useEffect } from "react"
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import './App.css'

function App() {
   let [scrollBar, setScrollBar] = useState<boolean>(false)

   useEffect(()=>{
      const scroll = () => {
         let scrollY = window.scrollY
         if(scrollY >= 50){
            setScrollBar(true)
         }else if(scrollY < 120){
            setScrollBar(false)
         }
      }
      window.addEventListener("scroll", scroll)
    
   }, [])

   return (
      <div className="App">
         <Menu 
            scrollBar={scrollBar}
         />
         <Home />
      </div>
   )
}

export default App
