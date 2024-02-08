import {motion} from "framer-motion"
const variants={
    open:{
        transition:{
            staggerChildren:0.1,
         
        }
    },
    closed:{
        transition:{
            staggerChildren:0.1,
            staggerDirection:-1
        }
    }
};
const itemvariants={
    open:{
       y:0,
       opacity:1
    },
    closed:{
        y:200,
        opacity:0
    }
};

export const Links = () => {

    const items=[
        "Homepage",
        "Skills",
        "Portfolio",
        "Contact"
    ]
        
 
  return (
    <motion.div className="links" variants={variants}> 
    {items.map(item => (<motion.a href={`#${item}`}
    key={item} variants={itemvariants}
    whileHover={{scale:1.5}} whileTap={{scale:0.9}}>{item}
    </motion.a>
    ))} </motion.div>
  )
}
