'use client'
import React, { useEffect, useState } from "react";
import { Box, Center,  Flex, Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import TopNav from "../../../components/TopNav";
import { useAccountAbstraction } from "../../../store/authContext";
// import { useContract } from "../../../store/contractContext";
const { ethers } = require('ethers');
import UserRegistry from "../../../assets/UserRegistry.json";
import UserContract from "../../../assets/RegistryContract.json";

interface UserRegistryContract {
  owner(): Promise<string>;
  getUserData(ownerAddress:string):Promise<string>;
  getSender():Promise<string>;
  // Add other methods as needed.
}
const BasicPage = () => {
    
  const {  isAuthenticated, web3Provider,ownerAddress } = useAccountAbstraction()
  const [kycStatus, setKycStatus] = useState("");
  const [contractInstance, setcontractInstance] =useState<UserRegistryContract|null> (null);
  const contractABI = UserRegistry.abi;
  const contractAddress = UserContract.address;


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
    if (contractInstance!=null && ownerAddress) {
      try {
        console.log(await contractInstance.owner());
        console.log(ownerAddress.toLowerCase());
      console.log(await contractInstance.getSender());
        
      console.log(await contractInstance.getUserData(ownerAddress.toLowerCase()));
      } catch (error) {
        
      }
     
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
        <TopNav heading="KYC Page"/>
        {
          isAuthenticated ? <Box padding={5} h='85%'>
          Wow
          </Box> :
            <Box w='100%' h='85%'>
              <Center h='85%'>
                <Heading color={'headings'}>Connect your Wallet to unlock KYC area</Heading>
                <Image src={"./vectorArrow.png"} w='10%' />
              </Center>
            </Box>
        }

      </Box>

    </Flex>
  );
};

export default BasicPage;