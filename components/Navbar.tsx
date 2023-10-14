'use client';

import React from "react";
import { Box, Button, Center, Flex, Icon, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiCompass, FiHelpCircle, FiHome, FiMessageSquare } from 'react-icons/fi';
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Flex bg={'#bcc2be'} w='15%' h='100%' p={6} direction={'column'} justifyContent={'space-evenly'} borderRadius={6}>

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
                    <Flex direction={"column"}  h='100%'  w='90%' alignItems={'center'} paddingTop={4} rowGap={6} >
                        <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.500', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6}>
                                <Icon as={FiHome} />
                                <Text >Dashboard</Text>
                        </Flex>
                        <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.500', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6} >
                                <Icon as={FiCompass} />
                                <Text >Property</Text>
                        </Flex>
                        <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.500', cursor: 'pointer' }}w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6} >
                            <Center columnGap={4}>
                                <Icon as={FiMessageSquare} />
                                <Text >Messages</Text>
                            </Center>
                        </Flex>
                    </Flex>
                </Center>

            </Box>
            <Box h='30%'   color='#555555' >
            <Center  h='100%' w='100%'  >

                <Flex direction={"column"} h='100%' w={'90%'} justifyContent={'flex-end'} >
                    <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.500', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6}>
                            <Icon as={FiHelpCircle} />
                            <Text >Get Help</Text>
                    </Flex>

                    <Flex columnGap={4} alignItems={'center'} _hover={{ bg: 'blue.500', cursor: 'pointer' }}  w={'100%'}  paddingTop={2} paddingBottom={2} paddingLeft={4} borderRadius={6} >
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