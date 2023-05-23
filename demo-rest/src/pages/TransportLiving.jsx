import { Badge, Box, Heading, Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from 'react';
import HeadingsPart from '../components/shared/HeadingsPart';
import {
  BsBusFrontFill,
  BsFillAirplaneFill,
  BsFillHouseDoorFill,
  BsFillTrainFrontFill,
} from 'react-icons/bs';
import { FaShip } from 'react-icons/fa';
import { FaHotel } from 'react-icons/fa';
import { MdApartment } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import NextButton from '../components/shared/NextButton';

const transport = [
  { icon: BsFillAirplaneFill, name: 'By Airplane' },
  { icon: BsBusFrontFill, name: 'By Bus' },
  { icon: BsFillTrainFrontFill, name: 'By Train' },
  { icon: FaShip, name: 'By Ship' },
];

const living = [
  { icon: FaHotel, name: 'Hotel' },
  { icon: BsFillHouseDoorFill, name: 'Private House' },
  { icon: MdApartment, name: 'Flat' },
  { icon: AiFillStar, name: 'Other' },
];

const TransportLiving = () => {
  const [transportValue, setTransportValue] = useState('0');
  const [livingValue, setLivingValue] = useState('0');

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
              onChange={setTransportValue}
              value={transportValue}
            >
              {transport.map(({ icon, name }, index) => (
                <Radio
                  key={index}
                  value={String(index)}
                  colorScheme="purple"
                  size="lg"
                  display="flex"
                  flexDirection="column-reverse"
                  justifyContent="center"
                  flexBasis="90px"
                >
                  <Box mb="5">
                    <Badge
                      ms="-0.5rem"
                      colorScheme={
                        String(index) === transportValue ? 'purple' : ''
                      }
                    >
                      {name}
                    </Badge>
                  </Box>
                  <Box
                    as={icon}
                    display="inline-block"
                    ms="-0.5rem"
                    mb="3"
                    boxSize="50px"
                    color={
                      String(index) === transportValue
                        ? 'purple.400'
                        : 'gray.400'
                    }
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
          <Box mt="10">
            <RadioGroup
              display="flex"
              justifyContent="space-evenly"
              onChange={setLivingValue}
              value={livingValue}
            >
              {living.map(({ icon, name }, index) => (
                <Radio
                  key={index}
                  value={String(index)}
                  colorScheme="purple"
                  size="lg"
                  display="flex"
                  flexDirection="column-reverse"
                  justifyContent="center"
                  flexBasis="90px"
                >
                  <Box mb="5">
                    <Badge
                      ms="-0.5rem"
                      colorScheme={
                        String(index) === livingValue ? 'purple' : ''
                      }
                    >
                      {name}
                    </Badge>
                  </Box>

                  <Box
                    as={icon}
                    display="inline-block"
                    ms="-0.5rem"
                    mb="3"
                    boxSize="50px"
                    color={
                      String(index) === livingValue ? 'purple.400' : 'gray.400'
                    }
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
      </Box>
      <NextButton to="/wish" />
    </Box>
  );
};

export default TransportLiving;
