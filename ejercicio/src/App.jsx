import {Box, Flex, Heading, Text, Image, Input, Button, ButtonGroup, Divider, AbsoluteCenter} from "@chakra-ui/react"
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './App.css'

function App() {

  return (
    <>
      <Flex w="auto" bg="black" align="center" justify="center" wrap="wrap">

      <Box bg='gray.300' w="400px" h="450px" m="150px 0px" borderRadius='10px 0 0 10px' textAlign='center'>
        <Heading fontSize='25px' m='66px 20px 0 10px'>Welcome to El-Shoes</Heading>
        <Text marginBottom='30px' color='gray.500'>For better experience with yours shoes!</Text>
        <Image boxSize='300px' borderRadius='10px' float='unset' src="/shoes.png" />
      </Box>

      <Box bg='white' w="600px" h="450px" borderRadius='0 10px 10px 0' textAlign='center'>
        <Box m='50px'w='300px'>
        <Heading m='10px 20px' textAlign='initial' fontSize='30px'>Sign Up</Heading>
        <Input m='5px 20px' w='309px' placeholder="Name" size="md" type="text" bg='gray.100'></Input>
        <Input m='5px 20px' w='309px' placeholder="E-mail" size='md' type="email" bg='gray.100'></Input>
        <Input m='5px 20px' w='309px' placeholder="Paswoord" size='md' type="password" bg='gray.100'></Input>
        <Button bg='black' color='white' w='309px' m='20px 20px 10px 20px'>Sing Up</Button>
        <Box position='relative' padding='5'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          Follows us!
        </AbsoluteCenter>
        </Box>
        <ButtonGroup ms='20px'>
        <Button w='150px' colorScheme='facebook' leftIcon={<FaFacebook />}>Facebook
        </Button>
        <Button w='150px' colorScheme='twitter' leftIcon={<FaGoogle />}>Google
        </Button>
        </ButtonGroup>
        </Box>
      </Box>
      </Flex>
    </>
  )
}

export default App
