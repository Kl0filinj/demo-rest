import firstSea from '../assets/sea-1.jpg';
import secondSea from '../assets/sea-2.jpg';
import thirdSea from '../assets/sea-3.jpg';

import firstDesert from '../assets/desert-1.jpg';
import secondDesert from '../assets/desert-2.jpg';
import thirdDesert from '../assets/desert-3.jpg';

import firstForest from '../assets/forest-1.jpg';
import secondForest from '../assets/forest-2.jpg';
import thirdForest from '../assets/forest-3.jpeg';

import firstMountains from '../assets/mountains-1.jpg';
import secondMountains from '../assets/mountains-2.jpg';
import thirdMountains from '../assets/mountains-3.jpg';

import '../Marquee.css';
import { Box, Image } from '@chakra-ui/react';

const Marquee = () => {
  return (
    <div className="marquee-infinite">
      <div className="marquee-container">
        <span className="marquee-inner-container ">
          {[
            firstSea,
            secondDesert,
            thirdSea,
            firstDesert,
            secondSea,
            thirdDesert,
          ].map((item, index) => (
            <>
              <Box width="350px" maxH="350px">
                <Image key={index} borderRadius="xl" src={item} alt="" />
              </Box>
            </>
          ))}
        </span>
      </div>
      <div className="marquee-container-reverse">
        <span className="marquee-inner-container ">
          {[
            firstForest,
            secondMountains,
            thirdForest,
            firstMountains,
            secondForest,
            thirdMountains,
          ].map((item, index) => (
            <>
              <Box width="350px" maxH="350px">
                <Image key={index} borderRadius="xl" src={item} alt="" />
              </Box>
            </>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
