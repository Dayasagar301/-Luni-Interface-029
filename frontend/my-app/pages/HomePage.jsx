import React, { useState, useRef } from "react";
import { Box, Container, Grid, GridItem, IconButton, Image, Stack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomePage() {
  // Use separate refs for each slider
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3=useRef(null);
  const sliderRef4=useRef(null);
  const cards9 = [
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-10052024-MainBannerDailyChanging-Z1-P3-Snitch-Allen-Solly-Flat50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1--5090.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-10052024-MainBannerDailyChanging-Z1-P5-DENNISLINGO-DILLINGER-MIN72.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-10052024-MainBannerDailyChanging-Z1-P2-Guess-Fossil-40-80.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-10052024-MainBannerDailyChanging-Z1-P6-DNMX-NETPLAY-MIN60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-10052024-MainBannerDailyChanging-Z1-P7-MS-Gap-Min40+750.jpg"
  ];

  const cards1 = [
    "https://assets.ajio.com/cms/AJIO/WEB/1440x128-2-09.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/Federal%20Bank-1440x128%201a.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/Federal%20Bank-1440x128%201a.jpg",
  ];
  const cards2 = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-10052024-TopBrandBanner-Z3-P2-Avaasa-Min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-10052024-TopBrandBanner-Z3-P3-Levis-USPA-30-50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-10052024-TopBrandBanner-Z3-P2-Nike-Adidas-Min30.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-10052024-TopBrandBanner-Z3-P5-NewBalanve-Underarmour-Upto50.jpg",
  ];
  const cards3 = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-AkshayaTritiya-P1-MalabarGold&Diamond-Png-UPTO25.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-AkshayaTritiya-P2-PNG-Joyalukkas-UPTO25.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-AkshayaTritiya-P4-Giva-Zavya-MIN50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-AkshayaTritiya-P5-Bevogue-Matchitt-min85.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-AkshayaTritiya-P3-YellowChimes-Trink-under799.jpg"
  ];
  const cards4 = [
    "https://assets.ajio.com/cms/AJIO/WEB/1440x128-MWO-D.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-BANKOFFERS-relianceone.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/Federal%20Bank-1440x128%201a.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01042024-mobikwik-1440x128.jpg"
  ];
  const cards5 = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-DailyBanner-Z6-P1-Avaasa-DNMX-Min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-DailyBanner-Z6-P2-Anubhutee-Berrylicious-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-DailyBanner-Z6-P3-AdidasKids-Skechers-3060off.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-100524-DailyBanner-Z6-P4-mns-gap-upto60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-10052024-MainBannerDailyChanging-Z1-P6-DNMX-NETPLAY-MIN60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-10052024-MainBannerDailyChanging-Z1-P7-MS-Gap-Min40+750.jpg"
  ];
  const cards6 = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-090524-EMB-Z11-P1-Dennislingo-Hummel-mIN65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-090524-EMB-Z11-P2-Anubhutee-Varanga-Min70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-090524-EMB-Z11-P3-TheBearHouse-Wuxi-Min55.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-090524-EMB-Z11-P4-Ishin-Sojanya-FLat70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-090524-EMB-Z11-P6-Ketch-Min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-090524-EMB-Z11-P7-Thedrystate-Rare-5090.jpg"
  ];
  

  // Ensure that cards array has at least one item
 

  // Function to move to the next slide for slider 1
  const nextSlide1 = () => {
    sliderRef1.current.slickNext();
  };

  // Function to move to the previous slide for slider 1
  const previousSlide1 = () => {
    sliderRef1.current.slickPrev();
  };

  // Function to move to the next slide for slider 2
  const nextSlide2 = () => {
    sliderRef2.current.slickNext();
  };

  // Function to move to the previous slide for slider 2
  const previousSlide2 = () => {
    sliderRef2.current.slickPrev();
  };
  const nextSlide3 = () => {
    sliderRef3.current.slickNext();
  };

  // Function to move to the previous slide for slider 2
  const previousSlide3 = () => {
    sliderRef3.current.slickPrev();
  };
  const nextSlide4 = () => {
    sliderRef4.current.slickNext();
  };

  // Function to move to the previous slide for slider 2
  const previousSlide4 = () => {
    sliderRef4.current.slickPrev();
  };

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <>
      {/* First carousel */}
      <br />
      <br />
      <Box position="relative" height={500} width="half" overflow="hidden" mb={8}>
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={previousSlide1}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide1}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={sliderRef1}>
          {cards9.map((url, index) => (
            <Box
              key={index}
              height="600px"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>

      {/* Second carousel */}
      <Box position="relative" height={200} width="half" overflow="hidden">
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={previousSlide2}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide2}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={sliderRef2}>
          {cards1.map((url, index) => (
            <Box
              key={index}
              height="150px" // Adjusted height
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-TopBannerBU-header.jpg" width="100%"/>
    <Box position="relative" height={500} width="full" overflow="hidden">
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={previousSlide3}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide3}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={sliderRef3}>
          {cards2.map((url, index) => (
            <Box
              key={index}
              height="500px" // Adjusted height
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-TopBannerMZ-Z3-header.jpg" width="100%"/>
    <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-FREEDEL-above799.jpg" width="100%"/>
    <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-060524-AkshayaTritiya-Z3-Header%20(1).gif" width="100%"/>
    <Box position="relative" height={500} width="full" overflow="hidden">
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={previousSlide4}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide3}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={sliderRef4}>
          {cards3.map((url, index) => (
            <Box
              key={index}
              height="400px" // Adjusted height
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Box position="relative" height={200} width="half" overflow="hidden">
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={previousSlide2}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide2}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={sliderRef2}>
          {cards4.map((url, index) => (
            <Box
              key={index}
              height="150px" // Adjusted height
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-DailyBannerBU-header.jpg" width="100%"/>
      <Box position="relative" height={500} width="half" overflow="hidden" mb={8}>
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={previousSlide1}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide1}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={sliderRef1}>
          {cards5.map((url, index) => (
            <Box
              key={index}
              height="600px"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
<Image src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-EMB-header.jpg" width="100%"/>\
<Box position="relative" height={500} width="half" overflow="hidden" mb={8}>
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={previousSlide1}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide1}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={sliderRef1}>
          {cards6.map((url, index) => (
            <Box
              key={index}
              height="600px"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Kids-Header.jpg" width="100%"/>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem>
      
        <VStack spacing={2}>
        <Box maxW="200px">
          <Image src="data:image/png;base64,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" alt="Image 1" />
         </Box>
          <Text textAlign="center">EASY EXCHANGE</Text>
        </VStack>
        
      </GridItem>
     
      <GridItem>
        <VStack spacing={2}>
        <Box maxW="200px">
          <Image src="data:image/jpeg;base64,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" alt="Image 2" />
         </Box>
          <Text textAlign="center">100% HANDPICKED</Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack spacing={2}>
           <Box maxW="200px">
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8sN00oM0oHHTvp6utFTV8XJkEmMkkZKEIkMEgfLEUUJD8hLkbZ294TIz/8/P1zeYaanqegpKzv8PHBw8lQWGnP0dW2ub9XXm6UmaLn6OppcH3g4eRfZnUHHDv19vczPlM8RlqDiJPJy9AAFTeEiZSusbiMkZu/wcd6f4tHUWJTWmuxtbtcY3IAAC8ACzIVGsXhAAALjUlEQVR4nO2d53qruBaGLRFTRHPca9wSlziec/93d8BOtpG0KBICGT+8P2e2gS9aTb3TaWlpaWlpaWlpEWYY6v6CShn0sWG/D3R/RmXMZ46NELLtr6XuT6kE/2wRjG4Q0hvr/hzljFcuQQ8897LX/UkqCU8Xw0E0lrH9eZWgsz58Bxbiwe62/wpBZ/2+MTGg76bRxMema5x/BXaKvLtGYvR83R9ZgnHPIFn67kHHWDQ1sJ6upperL8YJLqfmBZ3wsDXZ8JmOZW76a92fLMT8GNhp4QUG28axOZXOuGfnux8PcRvikKepW8z9eBz3MtH9+Xms+yjT/bDtZZqvZeKndsjll52d/aIqZt7vulCF8w/b3j1phgyHiyDT/SzjexK3T3gacVUqhResnrCfPOjnZAfHmD56E+PpR6avOub2yYw1Kl4y3QsTsqBNz+95JPMXttF7mv7VvP+dbXXIxkCumx9xptNGrd7tzzXoYQhPC5Kd3HGwSRmZGfRRkP1T21tN9Frr+JydHKLw4m4m6VEjnGzdnN/bWJ+1Lmcbw8uuzYi5GuY8Zb/KKYCwF+Cjhvyx7E+NzFAR6yPnIl/mn0lekUeMUb/WqvXtcCV2ZtqOfcicFY0TbzMzdRzgF8smo0NNcWf9MwrsvI6RFSU0kaQdHro5DhmLDEaHygc9Bj+LwMxpvagoMa957seT65A3kcaqSpGDycLJ79Zi6cLS35nZGfIm0rQWk0pEricLXKDXbgVOiXmJQR+DA480jomVp8mo9T4LyMOePRU3T5rhJTeyRi+yzM+VupZ8m/RIbhiIX2siJf0e/wvlu3psrsFCRXQd/KyKGGc8KNhVFgPWh0tusr2LdFY/pUQODtMo7xV4lWN7iruty2OxP6xl22VSyKaA28cviepj9T3WqKb38sqK+/vdjfRLuvnNh4lxqayPMz9Ms/udv9/QlX5DrkIvsCouim/lvS6FnonOdQxw+l+b7PHJahQ6AerVNlwU7s+bIL2jVoFCyzR71VROqaz3ZydICa6KFeKoxF/96BhaCIc9F8wgShVWURIKEJ56gLmqU+i43mLypvCDZRgMe4ipIZUpDCrqtQgT9QPcKhQGTzB2+Y+5UYFCQ7d9JnlrFRakVaiPVmFRWoX6aBUWpVWoj1ZhUVqF+mgVFqVVqI9WYVF0K1ymDsi+iMLl5yJN4mso9BG2Fyn/7yUU+shCKE3iKyj079NqKRJfQKH/N7Jtg77YfIWRD/69F2zFxitc4sT0NiSx6QqX9MJakzfUhiv0MTO7xPtisxXe0gTN5zvzbxqt0Oens+0e+4+arNDnl5fwApusMJEmMgQ2WOGS90HzpfKhzy/3hlqwuQp9p6DApiqEfPCl+hZLfp3na/UPl/weqBQT7TRTIVeqRVE0VWATFQKlWqqJdpqo0OeXdaebaKeBCkUFNk5hwVItgVaFa+F1w1SP/g5YqiXQqTC8/Ce4bcYXSRO/aFQYXggKhCT6QKLPE6hRYXiNNy3ZAhIFSrUE2hTeBSKBVoSK7XyB2hSG079tZ58FJQqVagk0KXwIjIJhIYmAiWaUagn0KPwz0d+mKCBRsFRLoEVhsgXj137kSiw26ASiQ+F6ym79zJMoXKol0KHw8D/2c3G2oUr7YIwWK3032A/ODDdAqVbQB2P0RJp3l/3kjKQhmyZ+0ZQtgFZMS/1SpVoCXRn//YOTCPuifJr4RVvV9h4UasVCky+Z6Ku8AYm8LxYe2U5HY+8Jiqgn+p+I9+h5dPaAZ7xE2hcBH8zr0fNoHcXgDZUq4BSYaEf3SBTgi8Y/ieWDzI1qFBbef8gnjX8FnFyPnofef/gt8YQ735TC4kdRAeHGvUkUmXzJZEkpHMk84saI2kMqcHhCSgFXslRLME56gnWRekbMKhn1XJERNLAVxSZfMjmZiYc4UmZwo5fcM20fRH4KJA204QXKfls/eaCUd5Z8SqdzTHZqyUzot0BE5ZA00fjLkgdlCH5ZkgNlC4Kfky9RXmBnlbQuU/7w4X0yYOCN4K8BX6SQ9cEY6qwTV/6EFSomI0P0tAjIFxMC5eMD+2ElDkKgUrd7yv8BDZA0/lHCRDudH+rkOlLiSVRR4x2Ff5/ui6UEdhZJN7RWJZ5EBVNhR+yAvf7SJhpBlUakX+JJJ8rMTIkjROFWLNeCnX0yxqOgzFFOA8qjbZk/FuSLJQV2dtTgMyl1Xg5VmcpVuHzSKJMmYtZUcVSiZouhHBHZUieXsUmjpA92OkPKLKQs6wFVwyPyJfUQ2hfLmigTSZFd7oDh9ZYyUyxn8kmJ5QUuqT+YNS35uC+qPjKF+hcPHr5Y1ge5TypppJGZUoFZJiXe+PPF0j4YmRWdYknpw50oM0WubBl/TxrlTZQNfqUKmjtUX7PEsFZsqApMtDOgF2+Ird2Bn0gbhS3dF5t9KDBRtgkRUvDIM+XYeCt9HORMhcA5LbB0nInx6crSVPFMeXr0cghLyRl51IgBwp7Og/fGdH1ExDt0EHu6EUuMbJWHjuzIU3QO4JQ+iNHQd//LO5WdEdkpei5dnEYZQ9dVRUvmsF1TmcNc6Rk/W358shx0RFDlhTE+MxYhMoWhkD7dmcaOwqNiz3QWKpEUS7Bk+pmuZDcA5I2ZcSA64uk37SvWt9I/c58OYigQHjstzRdzu4erOKSzhyY7dV84OWEG7ZSb0ZgJNs6oXldcMks1cbkRNogzYyR2ra4YbpklKoH6yy7X7PymoTKU5bFg+kyein4Ky54d2g3qq95mzLvxppLynw1mGNcVbQ7s1EBFoTzsMr7gbOs5f37MWk9l6XjJTiR58kt1RF7LXnNlVVdScdZCqnB4hjm3jIpU6B1ndsdB9Tlj0GUvfHB/KnxdyL9Obiqj+Bu/2QtYbFXdXpg3pj6Nwpq6ThpAOGIFOvKL2Iqx5+Z0gwr7w+sr6xYVZcIkfU6iyx5xpIxwxV0y59XQ+d7VZ6jcVipk1HL3Ov+HNSqRuB5xLwrqGY7mA2olEXXABZnKA/fj3Rt+tb3yvDjYcgJVzM0VZMkvhZVbzJzOnN+zQFY1drqBzZHkojKMj/kl/Z7akac89lxARaSr7jKhCf8X9Lo1X6Q15BelW5aqXMXn3KinVvuU15Df+4IVDZ7snkIg2IooUFDerFe8BzjV12oQJ2DZYVB+PdCWvw5YSwvGDIE7Qsl3uYN6hg5//5/X1TbtDMR0ZJEy6z+gFbdkpO86wo5vAdfZGtLF43oBGL591TUhe2O5AS6VdBdyf3S/C9zIDRwiXC+DLnDNq7eRyYwHFzAIt9oxiyKsr8Cd9vhT2FLXPWh3RpUDCIUJz9BidXchFv/GkIUK7iarDnBvDEEi0xrv0A3c2NS3roVhApQ3CBu7ojHibQptrvE2T3Qv6BhB9/Ta3WI7ISZAlo9+vdKYBnnm/JgKiu91LxAo1j1w00lQ2AJqIoS/0/7OyxtDBN0qjj+eJMYk6YM32VsfmeNwcI6IXLCOS9uF2UP1TdyM6V87QZBxI3P1TDcvJRiM+J5d3IzmDo4ZgwXfi475qGvQUIIjlDai3OhBs9IHF/JA5Dj1r0YSYLgBvxoZKzbijEfw7ktz+kRZEGJwhXfGOuZXsoyb9wKgiEFVTRCo5d0ALTWKKY9qfOaBEQZ5ztPUaVn4W6C3cTNAdO/+T2z4H2DZjmXthDsXbkYcu+N4CoejKMQ8YZZPY7+BrRA5ZEXArBn1t6Z1L3csRVTEwQ3FT7j8/mcVQ631ckrzRhCzWQ14Z71LCapAA7p6txpJs98UakYcjBrYgL8cocEJBs9rUAjl8dNSw6MBBYesno9Jpqm63UYUMdmEsyAlOSKvqRGGZXC2oSzv2OemG+gD/8q5Iw6uenZPVcVwS/Xnsbl56n6uFH3ycEfivYgD0gyOxPt1wK/XcUCa5SIq5KIuVHNLmHz23Y/tC2TATF5dX0tLS0tLS0tLJfwfkpmjiN5YBZgAAAAASUVORK5CYII=" alt="Image 3" />
          </Box>
          <Text textAlign="center">ASSURED QUALITY</Text>
        </VStack>
      </GridItem>
    </Grid>
    </>
  );
}
