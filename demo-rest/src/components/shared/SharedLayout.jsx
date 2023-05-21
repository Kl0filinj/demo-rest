import { Outlet } from 'react-router';
import { Box } from '@chakra-ui/react';
import bgIcon from '../../assets/bg-icon.svg';

const SharedLayout = () => {
  return (
    <Box
      // bgImage={`linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${mainBg})`}
      // bgRepeat="no-repeat"
      // bgSize="cover"
      textAlign="center"
      mt="20"
      w="100vw"
      h="100vh"
      bgImage={`url(${bgIcon})`}
      bgAttachment="fixed"
    >
      {/* <Container maxW="container.lg" border="2px green solid"> */}
      <Outlet />
      {/* </Container> */}
    </Box>
  );
};

export default SharedLayout;
