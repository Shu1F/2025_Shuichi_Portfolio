import {
  Box,
  ChakraProvider,
  defaultSystem,
  HStack,
  IconButton,
  Link,
  Separator,
} from "@chakra-ui/react";
import { SiWantedly } from "react-icons/si";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg="gray.900" minH="100vh" minW="100vw">
        {/* ヘッダー */}
        <Box>
          <HStack spacing={4} p={4} justify="flex-end">
            <Link
              color="white"
              textStyle="lg"
              href="#"
              _hover={{ color: "cyan.400" }}
              _focus={{ outline: "none" }}
            >
              HOME
            </Link>
            <Link
              color="white"
              textStyle="lg"
              href="#"
              _hover={{ color: "cyan.400" }}
              _focus={{ outline: "none" }}
            >
              ABOUT
            </Link>
            <Link
              color="white"
              textStyle="lg"
              href="#"
              _hover={{ color: "cyan.400" }}
              _focus={{ outline: "none" }}
            >
              WORKS
            </Link>
            <Link
              color="white"
              textStyle="lg"
              href="#"
              _hover={{ color: "cyan.400" }}
              _focus={{ outline: "none" }}
            >
              CONTACT
            </Link>
          </HStack>
          <Separator color="gray.500" />
        </Box>
        {/* フッター */}
        <Box>
          <Separator color="gray.500" />
          <HStack spacing={4} p={4} justify="flex-end">
            <IconButton
              as="a"
              href="https://www.wantedly.com/id/shuichi_fujiike"
              bgColor="gray.700"
              color="white"
              _hover={{ color: "cyan.400" }}
              border="none"
            >
              <SiWantedly />
            </IconButton>
            <IconButton
              as="a"
              href="https://github.com/Shu1F"
              bgColor="gray.700"
              color="white"
              _hover={{ color: "cyan.400" }}
              border="none"
            >
              <FaGithub />
            </IconButton>
            <IconButton
              as="a"
              href="https://x.com/shuichi_fujiike?s=21&t=QiGR1HJykaWs0z2fIvslSg"
              bgColor="gray.700"
              color="white"
              _hover={{ color: "cyan.400" }}
              border="none"
            >
              <FaXTwitter />
            </IconButton>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default App;
