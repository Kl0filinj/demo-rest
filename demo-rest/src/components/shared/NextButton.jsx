import { Box, IconButton } from '@chakra-ui/react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NextButton = ({ to }) => {
  return (
    <Box display="inline-block">
      <IconButton
        as={NavLink}
        to={to}
        variant="outline"
        outline="2px #9F7AEA solid"
        rounded="full"
        fontSize="50px"
        boxSize="60px"
        color="white"
        transitionProperty={'background'}
        transitionDuration={'350ms'}
        transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'purple.500',
        }}
        _focus={{
          bg: 'purple.500',
        }}
        icon={<MdOutlineNavigateNext />}
      />
    </Box>
  );
};

NextButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default NextButton;
