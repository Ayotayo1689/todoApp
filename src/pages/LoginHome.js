import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import RoomIcon from '@mui/icons-material/Room';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const LoginHome = () => {

    const [navOpen, setNavOpen] = useState(false)

    const openNav =()=>{
        setNavOpen(!navOpen)
    }

  return (
   <Flex overflow={"hidden"}  position={"relative"} h={"100%"} w={"100%"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
    <Sidebar open={navOpen}/>
    <Box h={"100%"} w={"100%"}>
        <Flex position={"relative"}  p={"20px 20px 0 20px"} justifyContent={"space-between"} alignItems={"center"}>
            <MenuIcon onClick={openNav} />
            <img src={"https://wrkmanapp.com/wp-content/uploads/2022/03/logo.png"} alt={"bundle logo"} width={"50%"} />
            <NotificationsOutlinedIcon/>
           <Flex  transition="left 0.3s ease"  display={!navOpen?"none":"flex"} position={"absolute"} right={"20px"} h={"40px"} w={"40px"} bg={'white'} justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} zIndex={8} onClick={openNav}>
           <HighlightOffOutlinedIcon  />
           </Flex>
        </Flex>
        <Flex  p={"0 20px"} m={"10px 0"}>
<RoomIcon/> <Text>Service Area: <span style={{color:"#009a26"}}>Ikeja, Nigeria</span></Text>
        </Flex>
        <Box h={"70vh"}>
        <iframe
  title="Google Map"
  width="100%"
  height="100%"
  frameBorder="0"
  scrolling="no"
  marginHeight="0"
  marginWidth="0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387132.7268716918!2d-74.25986398722868!3d40.69714942276962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903ce155677%3A0xb2f743b20a1eebc0!2sNew%20York%2C%20USA!5e0!3m2!1sen!2suk!4v1636612190919!5m2!1sen!2suk"
  allowFullScreen=""
></iframe>
        </Box>
        <Box p={"10px 20px"}>
            <Flex>
                <Flex justifyContent={"center"} alignItems={"center"} bg={"#47cbfc"} borderRadius={"50%"} fontSize={"20px"} color={"white"}  h={"30px"} w={'30px'}>?</Flex> <Text fontSize={"20px"} ml={"10px"}>How to get started?</Text>
            </Flex>
            <Button color={"#fff"} bg='#00406b' height={"fit-content"} width={"100%"} padding={"10px 0"} mt={"10px"}>Select Services</Button>

        </Box>
        
    </Box>

    </Flex>
  )
}

export default LoginHome