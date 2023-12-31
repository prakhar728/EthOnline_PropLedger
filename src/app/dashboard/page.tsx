'use client'
import React, { useEffect, useState } from "react";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import TopNav from "../../../components/TopNav";
import RevenueGraph from "../../../components/RevenueGraph";
import { useAccountAbstraction } from "../../../store/authContext";
// import { useContract } from "../../../store/contractContext";
const { ethers } = require('ethers');
import UserRegistry from "../../../assets/UserRegistry.json";

interface UserRegistryContract {
  owner(): Promise<string>;
  // Add other methods as needed.
}
const BasicPage = () => {

  const { loginWeb3Auth, isAuthenticated, web3Provider } = useAccountAbstraction()
  const [suppliedProperties, setsuppliedProperties] = useState([]);
  const [fractionalProperties, setfractionalProperties] = useState([]);
  const [contractInstance, setcontractInstance] =useState<UserRegistryContract|null> (null);
  const contractABI = UserRegistry.abi;
  const contractAddress = '0x5Dd018d76CC615c543D478677dE41F67b92E638d';
  const initializeContract = async (web3Provider: any) => {
    //   Replace with your web3 provider setup
    if (web3Provider) {
      try {

        // Create a contract instance
        const contract = new ethers.Contract(contractAddress, contractABI, web3Provider) as UserRegistryContract;

        // Return the contract instance
        setcontractInstance(contract);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const gatherData = async () => {
    if (contractInstance!=null) {
      console.log(await contractInstance.owner());
    }
  }
  // const {contract} = useContract();
  useEffect(() => {
    if (web3Provider) {
      initializeContract(web3Provider);
    }
  }, [web3Provider]);


  useEffect(() => {
    if (contractInstance) {
      gatherData();
    }
  }, [contractInstance])

  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <Flex fontFamily={"Roboto"} border={'1px'} borderColor={'gray.200'} h='100vh' backgroundColor={'#FFFFFF'} >
      <Navbar />
      <Box w='100%' h='100%'>
        <TopNav heading="Dashboard"/>
        {
          isAuthenticated ? <Box padding={5} h='85%'>
            {/* Side by Side List of Property Supplied or Fractonally Owned */}
            <Flex justifyContent={'space-evenly'} h='40%'  >
              <Box w='40%' backgroundColor={'white'} p={3} h='60%' borderRadius={15} border="1px solid rgba(0, 0, 0, 0.2)" boxShadow="2px 2px 4px rgba(0, 0, 0, 0.1)" >
                <Text fontSize={'24px'}>Your Properties Supplied  </Text>
                {
                  suppliedProperties.length == 0 ?
                    <Text>Nothing supplied yet</Text>
                    : <Text>Data</Text>
                }
              </Box>
              <Box w='40%' backgroundColor={'white'} h='60%' p={3} borderRadius={15} border="1px solid rgba(0, 0, 0, 0.2)" boxShadow="2px 2px 4px rgba(0, 0, 0, 0.1)" >
                <Text fontSize={'24px'} >Your Fractional Properties  </Text>
                {
                  suppliedProperties.length == 0 ?
                    <Text>Nothing owned yet</Text>
                    : <Text>Data</Text>
                }
              </Box>
            </Flex>
            {/* REVENUE CHART */}
            <Flex borderRadius={15} backgroundColor={'white'} w={'90%'} margin={'auto'} h='40%' direction={'column'} justifyContent={'space-between'} p={4} border="1px solid rgba(0, 0, 0, 0.2)" boxShadow="2px 2px 4px rgba(0, 0, 0, 0.1)">
              {/* HEADER CONTENT FOR REVENUE CHART */}
              <Flex justifyContent={'space-between'} p={3}>
                <Flex alignItems={'center'} columnGap={4} >
                  <Text p={1} fontSize={24}>Revenue Chart</Text>
                  <Text backgroundColor={'#85f29d'} borderRadius={4} p={1} textAlign={'center'}> +10.6%</Text>
                </Flex>
                <Flex alignItems={'center'} columnGap={4}>


                  <Text>Dates To - From</Text>
                </Flex>
              </Flex>
              {/* ACTUAL GRAPH */}
              <Box h='100%'>
                {/* GRAPH GOES HERE */}
                {/* ACTUAL GRAPH */}
                <Box h='100%'>
                  <RevenueGraph
                    xValues={[1, 2, 3, 4, 5, 6, 7]}  // Example X-values (days passed)
                    yValues={[150, 230, 180, 250, 300, 210, 320]}  // Example Y-values (amounts in hundreds)
                  />
                </Box>

              </Box>
            </Flex>
          </Box> :
            <Box w='100%' h='85%'>
              <Center h='85%'>
                <Heading color={'headings'}>Connect your Wallet to unlock Dashboard</Heading>
                <Image src={"./vectorArrow.png"} w='10%' />
              </Center>
            </Box>
        }

      </Box>

    </Flex>
  );
};

export default BasicPage;