import { Outlet } from 'react-router';
import { Box, Container } from '@chakra-ui/react';

const SharedLayout = () => {
  return (
    <Container maxW="container.lg" bgColor="red.100">
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
