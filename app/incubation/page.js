'use client';

import { Box, Container } from "@chakra-ui/react";

export default function IncubationPage() {
    return (
    <Box>
      
      {/* --- HERO SECTION --- */}
      <Box
        h="100vh"           // Full viewport height
        w="100%"
        position="relative" // Essential for layering the gradient on top
        
        // 1. The Main Background Photo
        bgImage="url('/incubation-bg.png')" 
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed" // Optional: Keep this if you want the parallax scroll effect
      >
        
        {/* 2. The Gradient Overlay Image */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          
          // The Gradient Image
          bgImage="url('/incubation-gradient.png')" 
          bgSize="cover"
          bgPos="center"
          
          // 3. The Opacity Control
          opacity={0.5} 
        />
        
        {/* No text here as requested */}
      </Box>

      {/* --- WHITE CONTENT SECTION --- */}
      <Box bg="white" w="100%" minH="100vh" py={10}>
        <Container maxW="container.xl">
          {/* Your scrollable content will go here */}
          <Box h="200px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi dolores assumenda, itaque similique totam enim delectus ab nobis optio perferendis!</Box>
        </Container>
      </Box>

    </Box>
  );
}