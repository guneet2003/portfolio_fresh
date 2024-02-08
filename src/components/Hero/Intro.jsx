import { motion } from 'framer-motion'
import "./Intro.scss"



  
const introVariants={
    initial:{
        opacity : 0,
    },
    animate:{
        opacity :1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
};


export const Intro = () => {



  return (
  
      <motion.div  className="Intro" variants={introVariants} initial="intial" animate="animate">
        <div className="intro-box" >
        Greetings! I&apos;m Guneet Singh, a third-year BCA student at Allenhouse Business School. Specializing in character animations, I bring digital characters to life using Spine 2D. With hands-on experience as a web developer and team leader in an Edtech startup, along with an online internship at CodeClause, I&apos;ve honed skills in the MERN stack and UI/UX design.

        My sights are set on the IT industry for web development and UI/UX design, while my passion lies in the gaming sector for character animations. Looking ahead, my career goal is to make significant contributions as a product designer. Securing 4th position in the Xpression Hackathon held across Uttar Pradesh and being recognized as a guest panelist during college orientation my journey reflects a fusion of technical expertise, creative prowess, and a commitment to excellence.

        Explore my portfolio and let&apos;s connect to explore opportunities for collaboration!
        </div>
    </motion.div>
    
  )
}
