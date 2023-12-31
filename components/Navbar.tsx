'use client';
import "../src/app/globals.css";
import React from "react";
import { Box, Button, Center, Flex, Icon, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { FiCompass, FiHelpCircle, FiHome, FiMessageSquare } from 'react-icons/fi';
import {GoVerified} from "react-icons/go";
import { useAccountAbstraction } from "../store/authContext";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();
    const {isAuthenticated,ownerAddress } = useAccountAbstraction();
    const pathname = usePathname()
    
    return (
        <Flex bg={'#F9F9F9'} w='15%' h='100%' p={6} direction={'column'} justifyContent={'space-evenly'} borderRadius={6} borderRight={'1px solid #f2f0f0 '}>

            {/* FIRST BOX TO CONTAIN TITLE AND HEADING */}
            <Box h={'10%'} borderBottom={'1px solid gray'} >
                <Flex alignItems={'center'} columnGap={4} paddingLeft={4} >
                    <Image src={'/houseicon.png'} boxSize='40px' />
                    <Text color={'highlight'}>PropLedger</Text>
                </Flex>

            </Box >

            {/* SECOND BOX TO CONTAIN NAVIGATION LINKS */}
            <Box h='50%' color='#555555 ' >
                <Center  h='100%'>
                    <Flex direction={"column"}  h='100%'  w='90%' alignItems={'center'} paddingTop={4} rowGap={6} sx={{".active":{bg: 'blue.500', cursor: 'pointer',color:"white"}}} >
                        <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.200', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6}   className={pathname=== "/dashboard" ? "active" : ""}>
                                <Icon as={FiHome} />
                                <Text >Dashboard</Text>
                        </Flex>
                        <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.200', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6} className={pathname === "/property" ? "active" : ""} >
                                <Icon as={FiCompass} />
                                <Text >Property</Text>
                        </Flex>
                        <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.200', cursor: 'pointer' }}w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6}     className={pathname=== "/messages" ? "active" : ""} >
                            <Center columnGap={4}>
                                <Icon as={FiMessageSquare} />
                                <Text >Messages</Text>
                            </Center>
                        </Flex>
                      { isAuthenticated && <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.200', cursor: 'pointer' }}w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6} onClick={()=>{
                        router.push(`kyc?address=${ownerAddress}`)
                      }}  className={pathname === `/kyc` ? "active" : ""}>
                            <Center columnGap={4}>
                                <Icon as={GoVerified} />
                                <Text >KYC</Text>
                            </Center>
                        </Flex>}
                    </Flex>
                </Center>

            </Box>
            <Box h='30%'   color='#555555' >
            <Center  h='100%' w='100%'  >

                <Flex direction={"column"} h='100%' w={'90%'} justifyContent={'flex-end'} >
                    <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.200', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6}>
                            <Icon as={FiHelpCircle} />
                            <Text >Get Help</Text>
                    </Flex>

                    <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.200', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6} >
                            <Icon as={FiHome} />
                            <Text >Settings</Text>
                    </Flex>
                </Flex>
                </Center>
            </Box>
        </Flex>
    );
};

export default Navbar;