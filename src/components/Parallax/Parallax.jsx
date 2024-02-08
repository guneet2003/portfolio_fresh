import "./Parallax.scss"
import {motion , useScroll,useTransform} from "framer-motion"
import { useRef } from "react"




 
export const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText= useTransform(scrollYProgress, [0,1], ["0%", "400%"])
    const yBg= useTransform(scrollYProgress, [0,1], ["0%", "100%"])

  return (
    <motion.div ref={ref}className="parallax" style={{background
    :type==="services" 
    ? "linear-gradient(180deg, #0e2940,#124f6d)" 
    : "linear-gradient(180deg, #124f6d,#0e2940)"}}>
    <motion.h1 style={{y: yText}}>{type ==="services" ? "Skills & Abilities" : "Project Showcase"}</motion.h1>
    <motion.div  className="mountains"></motion.div>
    <motion.div  className="planets" style={{ y: yBg, backgroundImage:`url(${type==="services" ? "./planets.png" : "./sun.png"})`}}></motion.div>
    <motion.div style={{x: yBg}} className="stars"></motion.div>
    </motion.div>
  )
}
