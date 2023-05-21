import {
  Box,
  Button,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Switch,
  Text,
} from '@chakra-ui/react';
import HeadingsPart from '../components/shared/HeadingsPart';
import { NavLink } from 'react-router-dom';

const IncomeClimate = () => {
  return (
    <Box>
      <HeadingsPart
        title="Income & Climate"
        subtitle="You can create a unique combination that is especially tailored to yourself"
      />
      <Box mt="20" mb="24">
        <Box>
          <Heading
            as="span"
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'purple.400',
              zIndex: -1,
            }}
          >
            Climate
          </Heading>
          <Box mt="10"></Box>
        </Box>
        <Box mt="10">
          <Heading
            as="span"
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'purple.400',
              zIndex: -1,
            }}
          >
            Income
          </Heading>
          <Box mt="10"></Box>
        </Box>
      </Box>
      <Button as={NavLink} to="/transport-living" variant="solid">
        Next Step
      </Button>
    </Box>
  );
};

export default IncomeClimate;
