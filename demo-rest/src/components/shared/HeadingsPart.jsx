import { Box, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const HeadingsPart = ({ title, subtitle }) => {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize="8xl"
        lineHeight="tall"
        letterSpacing="wide"
        color="white"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          as="p"
          fontWeight="normal"
          fontSize="xl"
          color="gray.600"
          maxW="670px"
          mx="auto"
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

HeadingsPart.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default HeadingsPart;
