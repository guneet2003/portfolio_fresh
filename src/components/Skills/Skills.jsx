import "./Skills.scss"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"
import SkillList from "../SkillsList/SkillList"

const variants={
    initial:{
        x:-500,
        y:200,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren:0.1
        }
    }

}

export const Skills = () => {

    const skills = [
        {  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
        {  image: 'https://en.esotericsoftware.com/files/branding/spine_badge.png ' },
        {  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png' },

        { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' },

        {  image: 'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png' },
        
        {  image: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png' },
        
        
        
    ];
    const ref = useRef()
    const isInView = useInView(ref, {margin:"-200px"})
  return (
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer">
            <p>
                Focusing on <motion.b whileHover={{color:"orange"}}> Us </motion.b> growth.<br/>
                Moving Together.
            </p><hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="./logo.png" alt=""/>
                <h1><motion.b whileHover={{color:"orange"}}>Core</motion.b> Competencies</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>What I </motion.b> Offer.</h1>
                <button>Skills</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <SkillList skills = {skills}/>
        </motion.div>
    </motion.div>
  )
}
