import { Outlet } from 'react-router';
import { Box } from '@chakra-ui/react';
import bgIcon from '../../assets/bg-icon.svg';

const SharedLayout = () => {
  return (
    <Box
      textAlign="center"
      py="20"
      bgImage={`url(${bgIcon})`}
      bgAttachment="fixed"
    >
      <Outlet />
    </Box>
  );
};

export default SharedLayout;
