import { Box, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ConfettiEffect from '../components/shared/ConfettiEffect';
import HeadingsPart from '../components/shared/HeadingsPart';

const Result = () => {
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataReady(true);
    }, 4000);
  }, []);

  return (
    <Box>
      <HeadingsPart
        title="Result"
        subtitle="Here is the exact match result based on your choices"
      />
      <Box>
        {isDataReady ? (
          <Box>12313123</Box>
        ) : (
          <Spinner
            thickness="6px"
            speed="0.85s"
            emptyColor="gray.200"
            color="purple.400"
            boxSize="16"
          />
        )}
      </Box>
      {isDataReady && <ConfettiEffect />}
    </Box>
  );
};

export default Result;
