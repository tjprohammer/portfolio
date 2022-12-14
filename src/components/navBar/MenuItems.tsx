
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

type MenuItemsProps = {
    name: string,
    to: string,
    id: number,
    open: boolean,
}


const MenuItems = (props: MenuItemsProps) => {
  return (
    <AnimatePresence>
        
            <motion.div
 >
  <Container>
    <Container2>
    <TextWrapper>
    <Typography sx={{p: 1}} variant='h4'>Home</Typography>
    <Typography sx={{p: 1}} variant='h4'>About</Typography>
    <Typography sx={{p: 1}} variant='h4'>Skills</Typography>
    </TextWrapper>
    </Container2>
  </Container>
  </motion.div>

    
  </AnimatePresence>
  )
}


const Container = styled(motion.div)`
right: 53px;
transform: translate(-7.1rem, -6ex);
background-color: pink;
height: 400px;
width: 400px;
align-items: center;
justify-content:center;
display: flex;
border-radius: 50%;
z-index: 1;

`;
const Container2 = styled(Container)`
top: -50px;
left: 0;
transform: translate(-1.1rem, -2ex);
background-color: lightblue;
height: 380px;
width: 380px;
align-items: center;
justify-content:center;
display: flex;
border-radius: 50%;
z-index: 1;
animation: 1.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards running menuWrapperChildInMd;

`;

const TextWrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
margin: 0 0 0 4em;
`;
export default MenuItems
