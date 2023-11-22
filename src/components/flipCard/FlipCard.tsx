import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };
  
const FlipCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      sx={{ width: 300, height: 400, position: 'relative' }}
    >
      <motion.div
        className="flip-card-inner"
        variants={variants}
        animate={isFlipped ? 'back' : 'front'}
        style={{ position: 'absolute', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      >
        {/* Front of the Card */}
        <CardContent
          className="flip-card-front"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Typography variant="h5">{project.title}</Typography>
          {/* Add image or other content here */}
        </CardContent>

        {/* Back of the Card */}
        <CardContent
          className="flip-card-back"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Typography variant="body1">{project.description}</Typography>
          {/* Additional details can go here */}
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default FlipCard;
