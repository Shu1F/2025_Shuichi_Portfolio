import {
  Box,
  ChakraProvider,
  defaultSystem,
  HStack,
  Link,
  Separator,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg="gray.900" minH="100vh" minW="100vw">
        <Box>
          <HStack spacing={4} p={4} justify="flex-end">
            <Link color="white" href="#" _hover={{ color: "cyan.400" }}>
              HOME
            </Link>
            <Link color="white" href="#" _hover={{ color: "cyan.400" }}>
              ABOUT
            </Link>
            <Link color="white" href="#" _hover={{ color: "cyan.400" }}>
              CONTACT
            </Link>
          </HStack>
          <Separator color="gray.500" />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default App;
