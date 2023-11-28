// import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
// import React from 'react'
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import { Link } from 'react-router-dom';
// import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
// const Signup = () => {

//     const [showPassword, setShowPassword] = React.useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);
  
//     const handleMouseDownPassword = (event) => {
//       event.preventDefault();
//     };


//   return (
//     <Box>
//        <Link to={"/"}> <KeyboardBackspaceIcon/></Link>
//         <Text fontSize={"3rem"}>Sign Up</Text>
//         <Text fontSize={"1.3rem"} color={"#3badf9"}> To Find services</Text>
//         <Flex mt={"20px"} flexDir={"column"}>
//       <Text fontSize={"1.2rem"} >Full Name</Text >
//       <Input placeholder='Enter Full Name' size='lg' />
//     </Flex>

//     <Flex mt={"20px"} flexDir={"column"}>
//       <Text fontSize={"1.2rem"} >Email</Text >
//       <Input placeholder='Enter Email Address' size='lg' />
//     </Flex>
//     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility/>}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//         </FormControl>


//     {/* <Flex mt={"20px"} flexDir={"column"}>
//       <Text fontSize={"1.2rem"} >Password</Text >
//       <Input placeholder='Create Password' size='lg' />
//     </Flex> */}

//     <Flex mt={"20px"} flexDir={"column"}>
//       <Text fontSize={"1.2rem"} >Referal code </Text >
//       <Input placeholder='Enter Referal code (Optional)' size='lg' />
//     </Flex>

//     <Text margin={"10px 20px"}>
//         By continuing, you are agreeing to our <span style={{color:"#3badf9",fontSize:"18px"}}>terms and conditions </span>including our <span style={{color:"#3badf9",fontSize:"18px"}}>privacy policy</span>
//     </Text>

//     <Button color={"#fff"} bg='#65b2e5' height={"fit-content"} width={"100%"} padding={"10px 0"} mt={"10px"}>Create Account</Button>

//     <Text margin={"10px 20px"}fontSize={"21px"} fontWeight={"500"}>
//        Have an account already? <span style={{color:"#3badf9",fontSize:"18px"}}>Log In </span>
//     </Text>
//     </Box>
//   )
// }

// export default Signup

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box p={"20px"}>
      <Link to="/">
        {' '}
        <KeyboardBackspaceIcon />
      </Link>
      <Text fontSize={'3rem'}>Sign Up</Text>
      <Text fontSize={'1.3rem'} color={'#3badf9'}>
        {' '}
        To Find services
      </Text>
      <Flex mt={'20px'} flexDir={'column'}>
        <Text fontSize={'1.2rem'}>Full Name</Text>
        <Input placeholder="Enter Full Name" size="lg" />
      </Flex>

      <Flex mt={'20px'} flexDir={'column'}>
        <Text fontSize={'1.2rem'}>Email</Text>
        <Input placeholder="Enter Email Address" size="lg" />
      </Flex>

      <Flex mt={'20px'} flexDir={'column'}>
        <Text fontSize={'1.2rem'}>Password</Text>
        <InputGroup size="lg">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            pr="4.5rem"
            id="password"
          />
          <InputRightElement width="4.5rem">
            <Button bg={"none"} size="sm" onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility/>}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex mt={'20px'} flexDir={'column'}>
        <Text fontSize={'1.2rem'}>Referal code</Text>
        <Input placeholder="Enter Referal code (Optional)" size="lg" />
      </Flex>

      <Text margin={'10px 20px'}>
        By continuing, you are agreeing to our{' '}
        <span style={{ color: '#3badf9', fontSize: '18px' }}>terms and conditions </span>
        including our <span style={{ color: '#3badf9', fontSize: '18px' }}>privacy policy</span>
      </Text>

      <Button color={'#fff'} bg="#65b2e5" height="fit-content" width="100%" padding="10px 0" mt="10px">
        Create Account
      </Button>

      <Text margin={'10px 20px'} fontSize="21px" fontWeight="500">
        Have an account already? <span style={{ color: '#3badf9', fontSize: '18px', borderBottom:"2px solid #3badf9",paddingBottom:"5px" }}><Link to="/login">Log In </Link></span>
      </Text>
    </Box>
  );
};

export default Signup;
