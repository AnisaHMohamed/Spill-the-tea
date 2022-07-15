import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaCoffee, FaEnvelope } from "react-icons/fa";
import axios from "axios"

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaCoffee = chakra(FaCoffee);
const CFaEnvelope = chakra(FaEnvelope);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword]  = useState()
  const handleShowClick = () => setShowPassword(!showPassword);
  const registerNewUser = (e) => {
    e.preventDefault();
    console.log(email, name, password, username)
    axios.post('/register', {
        email, name, password, username
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
      <Flex>
      <Heading color="teal.400" mr="20px">
        Spill the tea
      </Heading>
      <CFaCoffee color="teal.500" h="48px" w="48px" />
    </Flex>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={registerNewUser}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
            <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<CFaUserAlt color="gray.300" />}
              />
              <Input type="name" placeholder="Name" name="name" onChange={(event) => setName(event.target.value)}/>
            </InputGroup>
          </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="username" placeholder="Username" name="username" onChange={(event) => setUsername(event.target.value)}/>
                  
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaEnvelope color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email address" name="email" onChange={(event) => setEmail(event.target.value)}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                   onChange={(event) => setPassword(event.target.value)}/>
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account?{" "}
        <Link color="teal.500" href="/login">
          Sign in
        </Link>
      </Box>
    </Flex>

  );
};

export default App;
