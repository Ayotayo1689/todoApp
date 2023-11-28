import { Box, Button, Flex , Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Todo = () => {
  return (
    <Box position={"relative"} height={"100%"} p={"20px"}>
      <Text color={"#0187e0"} fontSize={"2rem"} fontWeight={700}>
        Welcome!
      </Text>
      <Flex  height={"40vh"} justifyContent={"center"} alignItems={"center"}>
      <img src={"https://wrkmanapp.com/wp-content/uploads/2022/03/logo.png"} alt={"bundle logo"} width={"80%"} />
      </Flex>
      <Box>
      <Text fontSize={"1.2rem"} mt={"15px"}> Find service Providers </Text>
      <Link to={"/signup"}><Button color={"#fff"} bg='#65b2e5' height={"fit-content"} width={"100%"} padding={"10px 0"} mt={"10px"}>Signup/Login As A Client</Button></Link>
      </Box>
      <Box>
      <Text fontSize={"1.2rem"} mt={"15px"} >Provider  services </Text>
      <Button color={"#fff"} bg='#00406b' height={"fit-content"} width={"100%"} padding={"10px 0"} mt={"10px"}>Signup/Login As A worker</Button>
      </Box>
      <Text fontSize={"1rem"} position={"absolute"} bottom={"10px"}>Are you a prefessional? <span style={{color:"#3badf9",fontSize:"18px"}}>Register as a professional</span></Text>
    </Box>
  )
}

export default Todo