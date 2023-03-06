import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

export default function UserDetail() {
    const location = useLocation();
    console.log(location.state);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://express-t4.onrender.com/api/users/' + location.state)
            .then((response) => {
                console.log(response)
                setUser(response.data);
            });
    });

    return (
        <Box
            w={['full', 'lg']}
            p={[8, 10]}
            mt={[20, '10vh']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
            boxShadow='2xl'
        >
            <VStack fontSize='xl'>
                <Heading as="h3" size="xl" color="orange" mb={6}>{user.name}'s Profile</Heading>
                <Image src={user.picture} w='30%' h='auto'></Image>
                <HStack>
                    <Text fontWeight='bold'>Name: </Text>
                    <Text>{user.name}</Text>
                </HStack>
                <HStack>
                    <Text fontWeight='bold'>Company: </Text>
                    <Text>{user.company}</Text></HStack>
                <HStack>
                    <Text fontWeight='bold'>Email: </Text>
                    <Text>{user.email}</Text>
                </HStack>

                <HStack>
                    <Text fontWeight='bold'>Phone No.: </Text>
                    <Text>{user.phone}</Text>
                </HStack>


                <HStack>
                    <Text fontWeight='bold'>Gender: </Text>
                    <Text>{user.gender}</Text>
                </HStack>

            </VStack>
        </Box>

    )
}