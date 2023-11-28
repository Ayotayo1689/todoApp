import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = ({open}) => {

  const links = [
    {
      icon: <HomeOutlinedIcon sx={{
        color:"#6fdbfc"
      }}/>,
    link:"/",
    label:"Home"
    },
    {
      icon: <AddCardOutlinedIcon sx={{
        color:"#6fdbfc"
      }}/>,
    link:"/",
    label:"Payment History"
    },
     {
      icon: <AssignmentTurnedInOutlinedIcon sx={{
        color:"#6fdbfc"
      }}/>,
    link:"/",
    label:"Completed Jobs"
    },
     {
      icon: <CancelPresentationRoundedIcon sx={{
        color:"#6fdbfc"
      }}/>,
    link:"/",
    label:"Cancelled Jobs"
    },
     {
      icon: <FavoriteRoundedIcon sx={{
        color:"#6fdbfc"
      }}/>,
    link:"/",
    label:"Favorites"
    },
     {
      icon: <WarningAmberRoundedIcon sx={{
        color:"#6fdbfc"
      }}/>,
    link:"/",
    label:"Disclaimer"
    }, 
    {
      icon: <HeadsetMicRoundedIcon sx={{
        color:"#6fdbfc"
      }}/>,
    link:"/",
    label:"Support"
    },
     {
      icon: <LogoutRoundedIcon sx={{
        color:"#ff6600"
      }}/>,
    link:"/",
    label:"Logout"
    }
  ]

  return (
    <Box 
    zIndex={3}
    left={open ? "0px" : "-100%"} 
    transition="left 0.3s ease" 
    position={"absolute"} h={"100%"} bg={"#6969695e"} w={'100%'}>
<Box w={"80%"} minWidth={"250px"} maxWidth={"300px"} h={"100%"} bg={"white"} >
  <Box h={"130px"} bg={"#1089a7"} borderRadius={"0px 0px 10px 10px"}>

  </Box>

  {
    links.map((data, index)=>{
      return(
        <Link to={data.link}>
        <Flex border={"2px solid white"} ml={"20px"} mt={"5px"} p={"6px"} gap={"25px"} fontSize={"1.2rem"} key={index}>
          {data.icon}
          <Text>
            {data.label}
          </Text>
        </Flex></Link>
      )
    })
  }

</Box>
    </Box>
  )
}

export default Sidebar