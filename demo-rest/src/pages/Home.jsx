import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import HeadingsPart from '../components/shared/HeadingsPart';
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <Box>
      <HeadingsPart
        title="Boots of travel"
        subtitle="Just fill out all the following questions and get amazing result match especially for you !"
      />
      <Box mt="20">
        {/* <Button as={NavLink} to="/variant-place" variant="solid">
          Start generation
        </Button> */}
        <Button
          /* flex={1} */
          as={NavLink}
          to="/variant-place"
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
          Start generation
        </Button>
      </Box>
      <Box mt="10">
        <Marquee />
      </Box>
    </Box>
  );
};

export default Home;
