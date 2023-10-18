import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAccountAbstraction } from './authContext';
import UserRegistry from "../assets/UserRegistry.json";
import { log } from '@web3auth/base';
// Import necessary dependencies, such as ethers.js
const { ethers } = require('ethers');

// Replace with your contract ABI and address
const contractABI = UserRegistry.abi;
const contractAddress = '0x5Dd018d76CC615c543D478677dE41F67b92E638d';


// Create a context for the contract store
const ContractContext = createContext<any | null>(null);

// Custom hook to access the contract store
export const useContract = () => {
  const context = useContext(ContractContext);
  console.log(context,"This is context");
  
  if (!context) {
    throw new Error('useContract must be used within a ContractProvider');
  }
  return context;
};

// Initial setup function to create a contract instance
const initializeContract = async (web3Provider:any) => {
//   Replace with your web3 provider setup
if(web3Provider){
    const provider = new ethers.providers.Web3Provider(web3Provider);

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
    // Return the contract instance
    console.log(contract);
    
    return contract;
}
  
};

const ContractProvider = ({ children }: { children: React.ReactNode  }) => {
  const [contract, setContract] = useState<any | null>(null);
  const {web3Provider} = useAccountAbstraction();
  // Initialize the contract on component mount
  useEffect(() => {
    console.log("Did this work?");
    
    initializeContract(web3Provider)
      .then((contractInstance) => {
        setContract(contractInstance);
      })
      .catch((error) => {
        console.error('Error initializing contract:', error);
      });
  }, [web3Provider]);

  return (
    <ContractContext.Provider value={contract}>
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
