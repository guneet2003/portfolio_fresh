
import { Links } from "./Links/Links";
import "./Sidebar.scss"
import { Toggle } from "./ToggleButton/toggle";
import {motion} from "framer-motion";
import {useState} from 'react';



  const variants={
    open:{
      clipPath:"circle(1100px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:0.3,
        type:"spring",
        stiffness:400,
        damping: 40,

      }
    }
  }
  export const Sidebar = () => {

    const[open,setOpen] = useState(false);
  return (
   
    <motion.div className="Sidebar" animate={open ? "open" : "closed"}> 
    < motion.div className="bg" variants = {variants}>
        <Links />
        </motion.div>
        <Toggle  setOpen = {setOpen}/>
        
      </motion.div>
     
  )
};

export default Sidebar;

