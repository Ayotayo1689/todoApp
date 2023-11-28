// import React from 'react'
// import Todo from '../components/Todo'

// const Home = () => {
//   return (
//    <Todo/>
//   )
// }

// export default Home



import React from 'react'

import { Box, Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import master from "./pngwing.com.png"
import steam from "./steam.png"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const transaction = [
    40, 30
  ]

  return (
  <Box h={"100%"}>
 <Flex justifyContent={"space-between"} alignItems={"center"}>
  <Box>
    <Text fontWeight={700} fontSize={"1.5rem"}>
      My account
    </Text>
    <Text color={"GrayText"}>
      Welcome Sylvia!
    </Text>
  </Box>
  <NotificationsNoneIcon/>
 </Flex>

 <Box height={"30vh"} borderRadius={"15px"} mt={"20px"} bg={"#0398fc"} color={"white"} p={"10px"}>

  <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image src={master} width={"60px"}/>
    
      <Box fontWeight={700} fontSize={"1.2rem"}>
        02/24
      </Box>

  </Flex>

  <Text fontWeight={700} fontSize={"1.5rem"}>
    Balance
  </Text>

  <Text fontWeight={700} fontSize={"2.5rem"}>
    $ 9,450.00
  </Text>

 </Box>

<Flex mt={"20px"} justifyContent={"space-between"}>
  <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
  <Button display={"flex"} justifyContent={"center"} alignItems={"center"} w={"70px"} boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;"} h={"70px"} borderRadius={"50%"} >
    <CreditCardIcon onClick={onOpen}/>
  </Button>
  <Text mt={"5px"} fontWeight={"500"} >Top Up</Text>
  </Flex>

  <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
  <Button display={"flex"} justifyContent={"center"} alignItems={"center"} w={"70px"} boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;"} h={"70px"} borderRadius={"50%"} >
    <ReceiptLongIcon onClick={onOpen}/>
  </Button>
  <Text mt={"5px"} fontWeight={"500"} >Pay</Text>
  </Flex>

  <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
  <Button display={"flex"} justifyContent={"center"} alignItems={"center"} w={"70px"} boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;"} h={"70px"} borderRadius={"50%"} >
    <SendOutlinedIcon onClick={onOpen}/>
  </Button>
  <Text mt={"5px"} fontWeight={"500"} >Send</Text>
  </Flex>

  <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
  <Button display={"flex"} justifyContent={"center"} alignItems={"center"} w={"70px"} boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;"} h={"70px"} borderRadius={"50%"} >
    <WidgetsOutlinedIcon />
  </Button>
  <Text mt={"5px"} fontWeight={"500"} >More</Text>
  </Flex>
</Flex>

<Box position={"absolute"} width={"100%"} left={0} height={"33vh"} p={"20px 20px 10px 20px"} bottom={"-4px"} borderRadius={"30px 30px 0 0"} boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"}>

  <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}><Box width={"50px"} bg="grey" h={"3px"} borderRadius={"20px"} ></Box></Flex>

  <Flex mt={"10px"} width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
<Text fontWeight={"500"} fontSize={"1.2rem"}>
  Recent Transactions 
</Text>
    <SearchOutlinedIcon/>

  </Flex>

  <Box mt={"15px"}>
      {transaction.map((data, index) => (
        <Flex mb={"5px"} justifyContent={"space-between"} alignItems={"center"} key={index}>
          <Flex gap={"10px"}>
          <Image borderRadius={"50%"} src={steam} height={"50px"} width={"50px"}/>
          <Box>
            <Text fontSize={"1.3rem"} fontWeight={"600"}>Steam</Text>
            <Text color={"grey"}>Top Up deposit</Text>
          </Box>

          </Flex>
          <Box fontWeight={"700"} fontSize={"1.3rem"}>
            +${data}
          </Box>

        </Flex>
      ))}
    </Box>



</Box>


      <Modal bg={"blue"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={"40vh"} >
          <ModalCloseButton />
          <ModalBody></ModalBody>
         <Flex flexDir={"column"} alignItems={"center"}>
         <ModalHeader>Action not allowed </ModalHeader>
          <ModalBody>
           Deposit $550 to complete this action
          </ModalBody>
         </Flex>
         <ModalBody></ModalBody>
        </ModalContent>
      </Modal>


</Box>
  )
}

export default Home