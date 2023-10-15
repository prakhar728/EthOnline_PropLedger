'use client';

import React, { useState } from "react";
import { Box, Button, Center, ChakraProvider, Flex, Heading, Icon, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiBell, FiCompass, FiHelpCircle, FiHome, FiMessageSquare } from 'react-icons/fi';
import theme from "../theme";
import { useAccountAbstraction } from "../store/authContext";
type TopNavProps = {};

const TopNav: React.FC<TopNavProps> = () => {
    const { loginWeb3Auth, isAuthenticated } = useAccountAbstraction()

//   const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [userAddress, setuserAddress] = useState("");
    return (
        <Flex h='15%' w='100%' alignItems={'center'} justifyContent={'space-between'} padding={5}>
            <Box>
                <Heading as='h5' size='2xl' noOfLines={1} color={'#4169E1'} >
                    Welcome to your Dashboard ...
                </Heading>
            </Box>
            <Flex alignItems={'center'} justifyContent={'space-evenly'} w='12%'>
                <Icon as={FiBell} />
                {
                    isAuthenticated ? <Flex alignItems="center">
                        <Text ml={2}>{userAddress.slice(0, 4) + "..." + userAddress.slice(-4)}</Text>
                    </Flex> :
                        <Button colorScheme='blue'>Sign In</Button>
                }

            </Flex>
        </Flex>

    );
};

export default TopNav;