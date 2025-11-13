'use client'; // Required for usePathname

import { Flex, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link"; // Official Next.js Link
import { usePathname } from "next/navigation"; // Hook to check current URL

// Helper Component to handle the "Active" underline logic
const NavLinkItem = ({ href, text }) => {
  const pathname = usePathname();
  // Check if the current path matches the link's href
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      {/* We use a Box or Text to apply styles based on isActive */}
      <Text
        textDecoration={isActive ? "underline" : "none"}
        textDecorationColor={isActive ? "black" : "transparent"} // Optional color control
        textUnderlineOffset="4px"
        fontSize="medium"
        fontWeight={isActive ? "semibold" : "normal"}
        _hover={{ textDecoration: "underline" }}
      >
        {text}
      </Text>
    </Link>
  );
};

const Navbar = () => {
  return (
    <Flex
      as="nav"
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"100%"} // Changed maxWidth to w="100%" for better layout
      py={4} // Added padding Y for spacing
      borderBottom="1px solid #e2e8f0" // Optional: adds a subtle bottom border
    >
      {/* Logo Section */}
      <Flex alignItems={"center"} width={["50%", "30%"]} pl={"2rem"} gap={2}>
        {/* Referencing image from /public folder directly */}
        <Image src="/BGIIES-SMALL.png" alt="BGIIES Logo" boxSize={"50px"} objectFit="contain" />
        <Text fontSize={"sm"} fontWeight={"700"} lineHeight="1.2">
          BITS Goa Innovation, Incubation & Entrepreneurship Society
        </Text>
      </Flex>

      {/* Links Section */}
      <Flex
        justifyContent={"space-between"}
        flex={2}
        fontFamily={"Roboto"}
        pl={"2rem"}
        pr={"2rem"}
        display={["none", "none", "flex"]} // Hide on mobile, show on desktop
      >
        <NavLinkItem href="/" text="Home" />
        <NavLinkItem href="/facilities" text="Facilities" />
        <NavLinkItem href="/incubation" text="Incubation" />
        <NavLinkItem href="/cohort" text="Cohort" />
        <NavLinkItem href="/gallery" text="Gallery" />
        <NavLinkItem href="/about" text="BGIIES Till Now" />
        <NavLinkItem href="/sisfs" text="SISFS" />
      </Flex>
    </Flex>
    );
};

export default Navbar;