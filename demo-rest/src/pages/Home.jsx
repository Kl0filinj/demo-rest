import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import HeadingsPart from '../components/shared/HeadingsPart';
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <Box textAlign="center" mt="24">
      <HeadingsPart
        title="Boots of travel"
        subtitle="Just fill out all the following questions and get amazing result match especially for you !"
      />
      <Box mt="24">
        <Button as={NavLink} to="/generate" variant="solid">
          Start generation
        </Button>
      </Box>
      <Box>
        <Marquee />
      </Box>
    </Box>
  );
};

export default Home;
