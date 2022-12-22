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
        stroke:'#000000',
        strokeWidth: '4',
        strokeLinejoin: 'round',
        strokeLinecap: 'round'
        }}
        d="M111 83H392V298H111V83Z" 
        fill="url(#pattern0)"
        variants={pathVariants}
      />
      <motion.path
        d="M30 0H509V479H30V0Z" 
        fill="url(#pattern1)"
        variants={pathVariants}
      />
      <motion.path
       d="M122 287H440V420H122V287Z" 
       fill="url(#pattern3)"
        variants={pathVariants}
      />
      <motion.path
      stroke="white"
       d="M0.777771 180.656H484.852V437.266H0.777771V180.656Z" 
       fill="url(#pattern2)"
        variants={pathVariants}
      />
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_0_1" transform="scale(0.0021097)"/>
</pattern>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image1_0_1" transform="scale(0.00362319 0.00485437)"/>
</pattern>
<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image2_0_1" transform="scale(0.0019685 0.00377358)"/>
</pattern>
<pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image3_0_1" transform="scale(0.00319489 0.0078125)"/>
</pattern>
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