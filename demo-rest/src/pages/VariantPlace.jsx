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
import { useState } from 'react';

import beach from '../assets/beach-2.jpg';
import desert from '../assets/desert-1.jpg';
import forest from '../assets/forest-1.jpg';
import mountains from '../assets/mountains-2.jpg';

const VariantPlace = () => {
  const [value, setValue] = useState('0');
  return (
    <Box>
      <HeadingsPart
        title="Recreation Mode & Place"
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
            Place
          </Heading>
          <Box mt="10">
            <RadioGroup
              display="flex"
              justifyContent="space-evenly"
              onChange={setValue}
              value={value}
            >
              {[beach, desert, forest, mountains].map((photo, index) => (
                <Radio
                  key={index}
                  value={String(index)}
                  colorScheme="purple"
                  size="lg"
                  display="flex"
                  flexDirection="column-reverse"
                  //   id={index}
                >
                  <Image
                    src={photo}
                    borderRadius="xl"
                    transitionProperty={'outline'}
                    transitionDuration={'350ms'}
                    transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
                    outline={
                      String(index) === value ? '1.5px white solid' : 'none'
                    }
                    mb="3"
                    width="270px"
                    height="180px"
                  />
                </Radio>
              ))}
            </RadioGroup>
          </Box>
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
            Recreation Mode
          </Heading>
          <Box display="flex" justifyContent="center" mt="10">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              w="490px"
            >
              <Text fontSize="5xl" fontWeight="bold" color="blue.400">
                PASSIVE
              </Text>
              <Switch size="lg" colorScheme="whatsapp" />
              <Text fontSize="5xl" fontWeight="bold" color="whatsapp.400">
                ACTIVE
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Button as={NavLink} to="/income-climate" variant="solid">
        Next Step
      </Button>
    </Box>
  );
};

export default VariantPlace;