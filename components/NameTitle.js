import React from 'react'
import {motion} from 'framer-motion'

const NameTitle = ({animatedText}) => {
    const nameTitle="Mustafa ÖRS"
    const sentence={
        hidden:{opacity:1},
        visible:{
            opacity:1,
            transition:{
                
                staggerChildren:0.15,
                
            }
        }
    }
    const letter={
        hidden:{opacity:0, y:50},
        visible:{
            opacity:1,
            y:0,
            
        }
    }
  return (
    <motion.h3 variants={sentence} initial="hidden" animate="visible"  >
        {animatedText.split("").map((char,index)=>{
            return(
                <motion.span key={char+"-"+index} variants={letter} >{char}</motion.span>
            )
        })}
    </motion.h3>
  )
}

export default NameTitle