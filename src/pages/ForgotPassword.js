import { Box, Button, Flex, Input,Text } from '@chakra-ui/react'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';


const ForgotPassword = () => {

 


  return (
    <Box position={"relative"} h={"100%"} p={"20px"}>
        <Link to="/signup">
          <KeyboardBackspaceIcon /> 
        </Link>
       <Flex justifyContent={"center"} >
       <img src={"https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg"} alt={"bundle logo"} width={"55%"} />
       </Flex>

       <Text fontSize={'2.2rem'}>Forgot Password</Text>
      
    

      <Flex mt={'20px'} flexDir={'column'}>
        <Text fontSize={'1.2rem'}>Email</Text>
        <Input placeholder="Enter Email Address" size="lg" />
      </Flex>


      <Button  position={"absolute"} bottom={"10px"} color={'#fff'} bg="#65b2e5" height="fit-content" width={"90%"} padding="10px 0" mt="10px">
       Request
      </Button>


     
    </Box>
  )
}

export default ForgotPassword