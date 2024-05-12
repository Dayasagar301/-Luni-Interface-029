import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <>
      <VStack
        backgroundColor="#0b2149"
        pr={"150px"}
        pl={"150px"}
        color="white"
        gap="30px"
        pt="50px"
        pb="30px"
      >
        <HStack alignItems="start" gap="200px">
          <VStack
            flexDirection={"column"}
            alignItems="start"
            fontSize="12px"
            fontWeight="500"
            gap="12px"
          >
            <h5>StyleMate</h5>
            <br />
            <Link style={{color:"white"}}>Who we are</Link>
            <Link style={{color:"white"}}>Join our team</Link>
            <Link style={{color:"white"}}>Terms & Conditions</Link>
            <Link  style={{color:"white"}}>We respect our Policy</Link>
            <Link  style={{color:"white"}}>Fee & Payments</Link>
            <Link  style={{color:"white"}}>Returns & Refunds</Link>
            <Link  style={{color:"white"}}>Promotion Tem & conditions</Link>
         
          </VStack>
          <VStack
            flexDirection={"column"}
            alignItems="start"
            fontSize="12px"
            fontWeight="500"
            gap="12px"
          >
            <h5>Help</h5>
            <br />
            <Link  style={{color:"white"}}>Track your order</Link>
            <Link  style={{color:"white"}}>Frequntly asked questions</Link>
            <Link  style={{color:"white"}}>Returns</Link>
            <Link  style={{color:"white"}}>Cancilation</Link>
            <Link  style={{color:"white"}}>Payments</Link>
            <Link  style={{color:"white"}}>Customer Care</Link>
            <Link  style={{color:"white"}}>How do i Reedeem My coopoon</Link>
            
          </VStack>
          <VStack
            flexDirection="column"
            alignItems="start"
            fontSize="13px"
            fontWeight="500"
            gap="12px"
          >
            <h5 >Shop by</h5>
            <br />
            <Link  style={{color:"white"}}>Men</Link>
            <Link  style={{color:"white"}}>Women</Link>
            <Link  style={{color:"white"}}>Kids</Link>
            <Link  style={{color:"white"}}>Press</Link>
            <Link  style={{color:"white"}}></Link>
            <Link  style={{color:"white"}}></Link>
            <Link  style={{color:"white"}}>Download your apps</Link>
            <Image
              h={"2rem"}
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=1331424000"
              w="145px"
              ml="-15px"
            ></Image>
            <Image
              src="https://cdn.kastatic.org/images/store-badges/google-play/en.png"
              w="100px"
              mt="-5px"
            />
          </VStack>
          <VStack
            flexDirection="column"
            alignItems="start"
            fontSize="12px"
            fontWeight="500"
            gap="12px"
          >
          <h5>Follow Us</h5>
          <br />
            <Link  style={{color:"white"}}>Facebook</Link>
            <Link  style={{color:"white"}}>Instagram StyleMart-Life</Link>
            <Link  style={{color:"white"}}>Instagram StyleMart-LUXE</Link>
            <Link  style={{color:"white"}}>Twitter</Link>
            <Link  style={{color:"white"}}>pinterest</Link>
          
          </VStack>
        </HStack>
        <Flex
          fontSize="12px"
          w="100%"
          alignItems="end"
          justifyContent="space-between"
        >
          <VStack alignItems="start">
            <HStack>
              <Text as="span" color="#7185AA">
                Language
              </Text>
              <Text>English</Text>
            </HStack>
            <HStack>
              <Text as="span" color="#7185AA">
                country
              </Text>
              <Image
                src="https://cdn.kastatic.org/images/country-flag-icons/us-flag.png"
                w="15px"
              />
              <Text>U.S.</Text>
              <Image
                src="https://cdn.kastatic.org/images/country-flag-icons/india-flag.png"
                w="15px"
              />
              <Text>India</Text>
              <Image
                src="https://cdn.kastatic.org/images/country-flag-icons/mexico-flag.png"
                w="15px"
              />
              <Text>Mexico</Text>
              <Image
                src="https://cdn.kastatic.org/images/country-flag-icons/brazil-flag.png"
                w="15px"
              />
              <Text>Brazil</Text>
            </HStack>
            <HStack mt="30px">
              <Text color="#7185AA">© 2024 StyeMart</Text>
              <Link  style={{color:"white"}}>Terms of use</Link>
              <Link  style={{color:"white"}}>Privacy Policy</Link>
              <Link  style={{color:"white"}}>Cookie Notice</Link>
            </HStack>
          </VStack>
          <HStack gap="15px">
            <i className="fa-brands fa-facebook fa-2xl"></i>
            <i className="fa-brands fa-twitter fa-2xl"></i>
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </HStack>
        </Flex>
      </VStack>
    </>
  );
};

export { Footer };
