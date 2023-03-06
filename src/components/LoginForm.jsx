import {
    Box, Button, FormControl,
    FormLabel, Heading, Input, useToast, VStack
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const toast = useToast()
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (
            formData.email.length !== 0 &&
            formData.password.length !== 0) {
            setIsFormValid(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://express-t4.onrender.com/api/login', { username: formData.email, password: formData.password })
            .then(response => {
                console.log(response.data);
                console.log(response.status);
                if (response.status === 200) {
                    toast({
                        title: "Login successful",
                        description: "Thankyou for logging in",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: 'top'
                    });
                    navigate("/profile");
                }
            })
            .catch(error => {
                console.error(error);
                toast({
                    title: "Login Failed",
                    description: "Please Try Again",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                });
            });
    };
    return (
        <Box
            w={['full', 'lg']}
            p={[8, 10]}
            mt={[20, '10vh']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
            boxShadow='2xl'>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                <Heading alignSelf='center' as="h3" size="2xl" color="orange" mb={6}>Login</Heading>
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="yellow" isDisabled={!isFormValid} onClick={handleSubmit}> Submit
                    </Button>
                </VStack>
            </form>
        </Box>
    )
}