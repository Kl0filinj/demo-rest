import beach from '../assets/mainBgImage.jpg';
import '../Marquee.css';
import { Box, Image } from '@chakra-ui/react';

const Marquee = () => {
  const images = Array(4).fill(beach);

  return (
    <div className="marquee-infinite">
      <div className="marquee-container">
        <span className="marquee-inner-container ">
          {images.map((item, index) => (
            <>
              <Box boxSize="350px">
                <Image key={index} borderRadius="xl" src={item} alt="" />
              </Box>
            </>
          ))}
        </span>
        <span className="marquee-inner-container ">
          {images.map((item, index) => (
            <>
              <Box boxSize="350px">
                <Image key={index} borderRadius="xl" src={item} alt="" />
              </Box>
            </>
          ))}
        </span>
      </div>
    </div>
  );
};

// Marquee.propTypes = {
//   imgs: PropTypes.array,
//   speed: PropTypes.number,
// };

export default Marquee;
