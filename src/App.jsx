import {
  Box,
  ChakraProvider,
  defaultSystem,
  HStack,
  IconButton,
  Link,
  Separator,
  Card,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import heroImg from "../src/assets/img/2025_Portofolio_main.jpg";
import { SiWantedly } from "react-icons/si";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box
        bg="gray.900"
        minH="100vh"
        minW="100vw"
        display="flex"
        flexDirection="column"
      >
        {/* ヘッダー */}
        <Box>
          <HStack spacing={4} p={4} justify="flex-end">
            {/* <Link
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
            </Link> */}
            <Link
              color="white"
              textStyle="lg"
              href="mailto:fshu201031@gmail.com"
              _hover={{ color: "cyan.400" }}
              _focus={{ outline: "none" }}
            >
              CONTACT
            </Link>
          </HStack>
          <Separator color="gray.500" />
        </Box>

        {/* メイン */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Card.Root
            maxW="sm"
            bg="gray.700"
            overflow="hidden"
            borderColor="cyan.400"
          >
            <Card.Body>
              <Image src={heroImg} />
            </Card.Body>
          </Card.Root>
          <Card.Root
            maxW="sm"
            bg="gray.700"
            overflow="hidden"
            borderColor="cyan.400"
          >
            <Card.Body>
              <Stack>
                <Text fontWeight="bold" textStyle="4xl" color="white">
                  About
                </Text>
                <Text fontWeight="normal" textStyle="lg" color="white">
                  氏名：藤池秀一
                </Text>
                <Text fontWeight="normal" textStyle="lg" color="white">
                  生年月日：2003年10月31日
                </Text>
                <Text fontWeight="normal" textStyle="lg" color="white">
                  所属：工学院大学(J3), 42Tokyo
                </Text>
                <Text fontWeight="normal" textStyle="lg" color="white">
                  趣味：ランニング, 筋トレ, 洋服, ライブ
                </Text>
              </Stack>
            </Card.Body>
          </Card.Root>
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
