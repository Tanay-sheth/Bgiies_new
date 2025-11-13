'use client';

import { Flex, Text, Input, Button, List } from "@chakra-ui/react";
import Link from 'next/link';

const Footer = () => {
    return (
        <Flex
            as="footer"
            flexDir="column"
            bgColor={"#084F83"}
            color={"white"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"4rem"}
        >
        For collaboration or to learn more about BGIIES please connect with us at:
        <Flex
            mt={"2rem"}
            justifyContent={"space-around"}
            flexDirection={["column", "column", "row"]}
            gap={[10, 10, 0]}
            w="100%"
        >
        {/* Section 1: Legacy Info */}
        <Flex flexDir={"column"} justifyContent={"space-around"} maxW={["100%", "25%"]}>
            <Text>
                With over 2 decades of a strong legacy behind us, we boast of
                global grade facilities for impeccable solutions
                </Text>
            <Text mt={4}>
                Call Toll free no:
            <br />
                +91 22XXXXXXXX
            </Text>
        </Flex>

        {/* Section 2: Address */}
        <Flex maxW={["100%", "25%"]}>
            <Text>
            Address:
            <br />
            BITS PILANI K.K. BIRLA GOA CAMPUS,
            <br />
            ZUARINAGAR, GOA - 403712
            </Text>
        </Flex>

        {/* Section 3: Links (FIXED FOR CHAKRA V3) */}
        <Flex flexDir={"column"} maxW={["100%", "25%"]}>
            <Text fontWeight="bold" mb={2}>Important Links:</Text>
            <List.Root gap={2} listStyleType="none">
                <List.Item><Link href="/about">About Us</Link></List.Item>
                <List.Item><Link href="/experts">Our Experts</Link></List.Item>
                <List.Item><Link href="/services">Services</Link></List.Item>
                <List.Item><Link href="/investment">Investment</Link></List.Item>
                <List.Item><Link href="/contact">Contact Us</Link></List.Item>
                <List.Item><Link href="/career">Career</Link></List.Item>
            </List.Root>
        </Flex>
        {/* Section 4: Newsletter */}
        <Flex flexDir={"column"} maxW={["100%", "25%"]}>
            <Text fontWeight="bold">Newsletter</Text>
            <Text fontSize="sm" mb={2}>
                Sign up for our newsletter & get latest updates.
            </Text>
            <Input
                type={"text"}
                borderRadius={"0px"}
                border={"2px solid #F17400"}
                bg="white"
                color="black"
                my={2}
                placeholder="E-mail"
            />
            <Button borderRadius={"9999px"} bg="#F17400" color="white" _hover={{ bg: "#D96700" }}>
                Subscribe
            </Button>
        </Flex>
        </Flex>
      {/* Copyright Bar */}
        <Flex
            bgColor={"#F17400"}
            color={"white"}
            alignItems={"center"}
            justifyContent={"center"}
            p={4}
        >
        Copyright @bgiies, All rights reserved
        </Flex>
    </Flex>
    );
};

export default Footer;