import { Box, Button, Heading, Select, Textarea } from '@chakra-ui/react';
import HeadingsPart from '../components/shared/HeadingsPart';
import { NavLink } from 'react-router-dom';

const Wish = () => {
  return (
    <Box>
      <HeadingsPart
        title="Wish Letter"
        subtitle="You can create a unique combination that is especially tailored to yourself"
      />
      <Box mt="20" mb="24">
        <Box>
          <Heading
            as="span"
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'purple.400',
              zIndex: -1,
            }}
          >
            Theme
          </Heading>
          <Select
            placeholder="Select option"
            _focus={{
              borderColor: 'purple.400',
              boxShadow: '0 0 0 1px #9F7AEA',
            }}
            mx="auto"
            mt="10"
            mb="3"
            maxW="700px"
          >
            <option value="0">Variant & Place</option>
            <option value="1">Income & Climate</option>
            <option value="2">Transport & Living</option>
            <option value="3">Other</option>
          </Select>
        </Box>
        <Box>
          <Textarea
            _focus={{
              borderColor: 'purple.400',
              boxShadow: '0 0 0 1px #9F7AEA',
            }}
            maxW="700px"
            minH="64"
            mb="10"
            size="lg"
            placeholder="Here is a your wish for us..."
            resize="none"
          />
        </Box>
        <Button
          as={NavLink}
          to="/result"
          px={4}
          fontSize={'sm'}
          rounded={'full'}
          bg={'purple.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'purple.500',
          }}
          _focus={{
            bg: 'purple.500',
          }}
        >
          Get a result
        </Button>
      </Box>
    </Box>
  );
};

export default Wish;
