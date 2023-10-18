'use client';
import { Box, Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import '@fontsource/lato';
import SlideShow from "../../components/SlideShow";
export default function Home() {
  const navigate = useRouter();
  return (
    <Box>
      {/* INITIAL LANDING SCREEN */}
      <Box h="100vh" backgroundImage={"./landingBackground.jpg"} backgroundSize={"cover"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} backgroundAttachment={"fixed"}  >
        {/* NAVIGATION FOR LANDING PAGE */}
        <Flex h="14vh" alignItems={"center"} justifyContent={"space-between"}>
          <Center w="10%"><Image src={"./logo.png"} boxSize={"120px"} /></Center>
          <Flex w="40%" justifyContent={"space-evenly"} alignItems={"center"} >
            <Link href="#Home" _hover={{ "textDecoration": "none", "color": "gray.100" }} color={"gray.600"}>Home</Link>
            <Link href="#Home" _hover={{ "textDecoration": "none", "color": "gray.100" }} color={"gray.600"}>Features</Link>
            <Link href="#Home" _hover={{ "textDecoration": "none", "color": "gray.100" }} color={"gray.600"}>How it works?</Link>
            <Link href="#Home" _hover={{ "textDecoration": "none", "color": "gray.100" }} color={"gray.600"}>About Us</Link>
            <Link href="#Home" _hover={{ "textDecoration": "none", "color": "gray.100" }} color={"gray.600"}>Contact</Link>
          </Flex>
          <Flex w="20%" justifyContent={"space-evenly"} alignItems={"center"}>
            <Box color={"gray.100"}>+(12) 345678901</Box>
            <Button borderRadius={30} onClick={() => {
              navigate.push("/dashboard")
            }} _hover={{ "backgroundColor": "gray.300" }}>Dashboard</Button>
          </Flex>
        </Flex>

        <Flex h="60%" color={"white"} direction={"column"} paddingLeft={8} >
          <Text fontSize={"3xl"} fontWeight={"bold"} fontFamily={"landing"}>Own a fraction of anything!</Text>
          <Text p={0} m={0} fontSize={"154px"} fontWeight={"bold"} fontFamily={"landing"} w="80%">Expand your Investments</Text>
        </Flex>

      </Box>

      {/* About the Product */}
      <Box h="50vh" display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} >
        <Flex h="60%" w="95%" justifyContent={"space-between"}>
          <Text fontFamily={"landing"} fontSize={"xl"} >(01) About the Product</Text>
          <Text fontFamily={"landing"} w="60%" fontSize={"4xl"} css={{
            backgroundImage: 'linear-gradient(to bottom, black, white)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text', // For webkit-based browsers
            color: 'transparent',
            display: 'inline',
          }}>
            &nbsp;&nbsp;&nbsp; We bring fractional ownership for everyone. You don't need large sum to invest and gain the stability and growth of real estate. We bring it to your doorstep. Don't know blockchain? we got your back with our easy account abstraction.
          </Text>
        </Flex>
      </Box>

      {/* FEATURES OF PRODUCT */}
      <Box  h="70vh" display={"flex"} alignItems={"center"} flexDirection={"column"} >
        <Flex h="80%" w="95%" justifyContent={"space-between"}  flexDirection={"column"}>
          <Text fontFamily={"landing"} fontSize={"xl"} >(02) Features</Text>
          {/* ADD HEADING LARGE(ABOUT 96PX) THAT HAS ONE WORD IN BLACK AND ANOTHER IN GRAY and THEY ARE SIDE BY SIDE AND ABOUT 20% OF BOTH WORDS APPEARS BEHIND THE BOX ELEMENT */}
          <Box w="100%" display="flex" justifyContent="center" position={"relative"} textAlign={"center"} >
            <Text
              fontFamily="landing"
              fontSize="184px"
              color="transparent"
              style={{
                background: "linear-gradient(to bottom, black, white)",
                WebkitBackgroundClip: "text"
              }}
              
              position="absolute"
              left="20%"
            >
              OUR  &nbsp;
            </Text>
            <Text
              fontFamily="landing"
              fontSize="184px"
              color="transparent"
              style={{
                background: "linear-gradient(to bottom, black, white)",   
                WebkitBackgroundClip: "text"
              }}
              
              position="absolute"
              left="45%"
            >
              FEATURES
            </Text>

          </Box>
          <Box w="100%"  position={"relative"} top={"20%"} >
            <SlideShow />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
