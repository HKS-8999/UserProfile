import { Search2Icon } from '@chakra-ui/icons';
import { Card, Flex, Heading, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function UserList() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        axios.get('https://express-t4.onrender.com/api/users')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const userDetails = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        navigate("/userDetails", { state: e.target.id });
    }

    return (
        <Flex justifyContent={'center'}>
            <VStack spacing="6" p={8} w="60%">
                <Heading as="h3" size="2xl" color="orange" mb={6}>User List</Heading>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input type="text" placeholder="Search by name" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
                </InputGroup>

                <SimpleGrid columns={[1, 2, 3]} w='100%' h='auto' spacing="8">
                    {filteredUsers.map(user => (
                        <Card shadow='xl' align='center' p={3} id={user._id} onClick={userDetails}>
                            <Image src={user.picture} w="100%" h="auto" id={user._id} onClick={userDetails} />
                            <Heading size="md" mt="2" id={user._id} onClick={userDetails}>{user.name}</Heading>
                            <Text id={user._id} onClick={userDetails}>{user.company}</Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </VStack>
        </Flex>
    );
}

export default UserList;