
import { useState } from "react"
import  "./Hero.scss"
import {motion} from "framer-motion"
// import { Intro } from "./Intro"




const textVariants={
    initial:{
        x: -500,opacity:0,
    },
    animate:{
        x: 0,opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:15,
        transition : {
        duration:2,
        repeat:Infinity,
        }
    }
}

const slideVariants={
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            duration:60,
            repeatType:"mirror"
        }
    },

    }

    


export const Hero = () => {

    const [showIntroduction, setShowIntroduction] = useState(false);

    const handleProjectsClick = () => {
      setShowIntroduction(!showIntroduction);
    };

  return (
    
    <div className='Hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate= "animate">
            <motion.h2 variants={textVariants}>Guneet Singh</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer,<br />UI Designer<br />& Spine Animator</motion.h1>

            <motion.div variants={textVariants} className="button">

        

         <button onClick={handleProjectsClick}> Projects</button>
                <button>Contact Me</button>
            </motion.div>
            {/* {showIntroduction && <Intro />} */}
            <motion.img animate="scrollButton" variants={textVariants} src="./scroll.png" alt="" />
        </motion.div>
        <motion.div  variants={slideVariants} initial="initial" animate="animate" className="slide">
        WEB DEVELOPER
        </motion.div>
        </div>
        <motion.div className="imageContainer" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}}>
            <img src="./pic.webp" alt="#" />
        </motion.div>
    </div>
 
  )
}
