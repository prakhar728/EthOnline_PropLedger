'use client'
import React, { useState } from "react";
import { Box, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import TopNav from "../../../components/TopNav";
import RevenueGraph from "../../../components/RevenueGraph";
const BasicPage = () => {
  const [suppliedProperties, setsuppliedProperties] = useState([]);
  const [fractionalProperties, setfractionalProperties] = useState([]);

  return (
    <Flex fontFamily={"Roboto"} border={'1px'} borderColor={'gray.200'} h='100vh' backgroundColor={'#ebedf0'} >
      <Navbar />
      <Box w='100%' h='100%'>
        <TopNav />
        <Box padding={5} h='85%'>
          {/* Side by Side List of Property Supplied or Fractonally Owned */}
          <Flex justifyContent={'space-evenly'} h='40%'  >
            <Box w='40%' backgroundColor={'white'} p={3} h='60%' borderRadius={15} >
              <Text fontSize={'24px'}>Your Properties Supplied  </Text>
              {
                suppliedProperties.length == 0 ?
                  <Text>Nothing supplied yet</Text>
                  : <Text>Data</Text>
              }
            </Box>
            <Box w='40%' backgroundColor={'white'} h='60%' p={3} borderRadius={15} >
              <Text fontSize={'24px'} >Your Fractional Properties  </Text>
              {
                suppliedProperties.length == 0 ?
                  <Text>Nothing supplied yet</Text>
                  : <Text>Data</Text>
              }
            </Box>
          </Flex>
          {/* REVENUE CHART */}
          <Flex borderRadius={15} backgroundColor={'white'} w={'90%'} margin={'auto'} h='40%' direction={'column'} justifyContent={'space-between'} p={4}>
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
              <Box  h='100%'>
                <RevenueGraph
                  xValues={[1, 2, 3, 4, 5, 6, 7]}  // Example X-values (days passed)
                  yValues={[150, 230, 180, 250, 300, 210, 320]}  // Example Y-values (amounts in hundreds)
                 />
              </Box>

            </Box>
          </Flex>
        </Box>
      </Box>

    </Flex>
  );
};

export default BasicPage;