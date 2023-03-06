import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, HStack, IconButton, Spacer, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box boxShadow='lg'>
            <Flex as="nav" p="10px" alignItems="center" shadow="10px">
                <Box justifyContent="space-between">
                    <HStack>
                        <Text
                            textAlign="left"
                            bgGradient="linear-gradient(311deg, rgba(143,107,41,1) 0%, rgba(237,193,65,1) 33%, rgba(223,159,40,1) 82%);"
                            bgClip="text"
                            fontSize="5xl"
                            fontWeight="extrabold"
                            ml="20px"
                        >
                            <Link to="/">CineScope</Link>
                        </Text>

                        <IconButton
                            icon={colorMode === "light" ? <SunIcon></SunIcon> : <MoonIcon></MoonIcon>}
                            isRound='true'
                            onClick={toggleColorMode}
                            size="sm"
                        >
                        </IconButton>
                    </HStack>
                </Box>
                <Spacer></Spacer>
                <HStack spacing="30px">
                    <Avatar name="Harsh"></Avatar>
                    <Button colorScheme="gray">Logout</Button>
                </HStack>
            </Flex>
        </Box>

    )
}