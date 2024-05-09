import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {  Search2Icon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
export default function Navbar() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={16} h={20}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image src="./public/stylemart.png" h={200} />
            
          </Box>
         
          <h5 >Home</h5>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"} gap={4}>
          <h5>MEN</h5>
          <h5>WOMEN</h5>
          <h5>KIDS</h5>
          </Flex>
         
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
            <InputGroup>
            <Input placeholder='Search StyleMate' size='md' />
            <InputRightElement>
              <Search2Icon color="gray.400" />
            </InputRightElement>
          </InputGroup>
              <Button colorScheme="teal" size="md">
                Login
              </Button>
              <Button colorScheme="blue" size="md">
                Signup
              </Button>
              <div>
              <FaShoppingCart size={30}/>
              </div>
           
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
