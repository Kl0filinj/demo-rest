import { Outlet } from 'react-router';
import { Box, Container } from '@chakra-ui/react';
// import mainBg from '../../assets/mainBgImage.jpg';

const SharedLayout = () => {
  return (
    <Box
      // bgImage={`linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${mainBg})`}
      // bgRepeat="no-repeat"
      // bgSize="cover"
      w="100vw"
      h="100vh"
    >
      {/* <Container maxW="container.lg" border="2px green solid"> */}
      <Outlet />
      {/* </Container> */}
    </Box>
  );
};

export default SharedLayout;
