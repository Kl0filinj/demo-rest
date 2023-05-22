import { Box, Heading, Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from 'react';
import HeadingsPart from '../components/shared/HeadingsPart';
import {
  BsBusFrontFill,
  BsFillAirplaneFill,
  BsFillTrainFrontFill,
} from 'react-icons/bs';
import { FaShip } from 'react-icons/fa';
import NextButton from '../components/shared/NextButton';

const TransportLiving = () => {
  const [value, setValue] = useState('0');

  return (
    <Box>
      <HeadingsPart
        title="Transport & Living"
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
            Transport
          </Heading>
          <Box mt="16">
            <RadioGroup
              display="flex"
              justifyContent="space-evenly"
              onChange={setValue}
              value={value}
            >
              {[
                BsFillAirplaneFill,
                BsBusFrontFill,
                BsFillTrainFrontFill,
                FaShip,
              ].map((item, index) => (
                <Radio
                  key={index}
                  value={String(index)}
                  colorScheme="purple"
                  size="lg"
                  display="flex"
                  flexDirection="column-reverse"
                  justifyContent="center"
                  id={index}
                >
                  <Box
                    as={item}
                    display="inline-block"
                    ms="-0.5rem"
                    mb="3"
                    boxSize="50px"
                    color={String(index) === value ? 'purple.400' : 'gray.400'}
                    transitionProperty={'color'}
                    transitionDuration={'350ms'}
                    transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
                    id="123"
                  ></Box>
                </Radio>
              ))}
            </RadioGroup>
          </Box>
        </Box>
        <Box mt="20">
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
            Living
          </Heading>
          <Box mt="10">2</Box>
        </Box>
      </Box>
      <NextButton to="/wish" />
    </Box>
  );
};

export default TransportLiving;
