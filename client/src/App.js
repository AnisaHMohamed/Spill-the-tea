import "./App.css";

import {
  Flex,
  Heading,
  chakra,
  Box,
  Link,
  HStack,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

const CFaCoffee = chakra(FaCoffee);
function App() {
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  return (
    <>
      <HStack
        backgroundImage={
          "url('https://images.unsplash.com/photo-1586600485773-c90ebcd53540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')"
        }
      >
        <Flex justifyContent="center" w="100%">
          <CFaCoffee color="#d5a67c" h="300px" w="300px" />
        </Flex>
        <Box
          width="100%"
          height="100vh"
          backgroundColor="#fafbfd"
          padding="36px"
        >
          <CFaCoffee color="brown" h="48px" w="48px" />
          <Flex
            flexDirection="column"
            width="100%"
            height="100vh"
            backgroundColor="#fafbfd"
          >
            <Flex flexDirection="column">
              <Heading
                color="black"
                mr="20px"
                fontSize="64px"
                mb="20px"
                mt="65px"
              >
                Freshly Steeped ☕️
              </Heading>
              <Heading
                color="black"
                mr="20px"
                fontSize="31px"
                mt="25px"
                mb="27px"
              >
                Join Spill the Tea today.{" "}
              </Heading>
            </Flex>
            <Button
              borderRadius="20px"
              border="1px solid #dadce0"
              width="300px"
              maxWidth="400px"
              minWidth="min-content"
              padding="0 12px"
              color="#d5a67c"
              mb="20px"
              bg="transparent"
            >
              Already have an account?{" "}
              <Link color="#de5f2b" href="/login">
                Sign in
              </Link>
            </Button>{" "}
            <Button
              borderRadius="20px"
              border="1px solid #dadce0"
              width="300px"
              maxWidth="400px"
              minWidth="min-content"
              padding="0 12px"
              color="#d5a67c"
              bg="transparent"
            >
              Create a new account?{" "}
              <Link color="#de5f2b" href="/register">
                Register{" "}
              </Link>
            </Button>
          </Flex>
        </Box>
      </HStack>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"10xl"} py={2}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={2}
          >
            <Stack spacing={0}>
              <CFaCoffee color="brown" h="48px" w="48px" />
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Github</ListHeader>
              <Link
                color="#de5f2b"
                href="https://github.com/AnisaHMohamed"
                isExternal
              >
                AnisaHMohamed{" "}
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>LinkedIn</ListHeader>
              <Link
                color="#de5f2b"
                href="https://www.linkedin.com/in/anisa-mohamed/"
                isExternal
              >
                Anisa Mohamed{" "}
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>{" "}
    </>
  );
}

export default App;
