import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
    hidden: { rotate: -100 },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "ease"
        }
    }
}

const SvgAnimation = () => {
  return (
    <div>
    <div className="logo">
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="738" height="646" viewBox="0 0 738 646"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.path
      style={{
        height: 'auto',
        width: '80px',
        overflow: 'visible',
        stroke:'#fff',
        strokeWidth: '4',
        strokeLinejoin: 'round',
        strokeLinecap: 'round'
        }}
        fill="none"
        d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
        variants={pathVariants}
      />
      <motion.path
        fill="none"
        d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
        variants={pathVariants}
      />
    </motion.svg>
  </div>
  <motion.div className="title"
    initial={{ y: -250}}
    animate={{ y: -10 }}
    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
  >
  </motion.div>
  </div>
  )
}

export default SvgAnimation