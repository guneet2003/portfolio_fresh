import {Sidebar} from "../Sidebar/Sidebar"
import "./Navbar.scss"
import { motion} from "framer-motion"
export const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}}
            transition={{duration: 0.5}}>Portfolio</motion.span>
        
            <div className="social">
                <a href="https://github.com/guneet2003" target="blank"><motion.img initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}}
            transition={{duration: 0.5}} src="./github.png" alt=""></motion.img></a>
                <a href="https://leetcode.com/guneet-29/" target="blank"><motion.img initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}}
            transition={{duration: 0.5}} src="./leetcode.png" alt=""></motion.img></a>
                <a href="https://www.instagram.com/guneet_29_/" target="blank"><motion.img initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}}
            transition={{duration: 0.5}} src="./instagram.png" alt=""></motion.img></a>
                <a href="https://www.linkedin.com/in/guneet-singh-7369b8276/" target="blank"><motion.img initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}}
            transition={{duration: 0.5}} src="./linkedin.png" alt=""></motion.img></a>
            </div>
        </div>
    </div>
  )

}
export default Navbar
