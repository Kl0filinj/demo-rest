import { Box } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import PropTypes from 'prop-types';

const StarsRating = ({ rating }) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color="#9F7AEA"
                // color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf key={i} style={{ marginLeft: '1' }} color="#9F7AEA" />
            );
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} color="#9F7AEA" />;
        })}
    </Box>
  );
};

StarsRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarsRating;
