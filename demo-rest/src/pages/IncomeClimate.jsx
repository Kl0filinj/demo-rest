import {
  Box,
  Button,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import HeadingsPart from '../components/shared/HeadingsPart';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const IncomeClimate = () => {
  const [incomSliderValue, setIncomSliderValue] = useState(5);
  const [showIncomeTooltip, setShowIncomeTooltip] = useState(false);
  const [showClimateTooltip, setShowClimateTooltip] = useState(false);

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
          <Box mt="12" width="600px" mx="auto">
            <Slider
              id="slider"
              defaultValue={5}
              min={0}
              max={100}
              colorScheme="red"
              onChange={(v) => setIncomSliderValue(v)}
              onMouseEnter={() => setShowClimateTooltip(true)}
              onMouseLeave={() => setShowClimateTooltip(false)}
            >
              <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                25%
              </SliderMark>
              <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                50%
              </SliderMark>
              <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                75%
              </SliderMark>
              <SliderTrack
                h="10px"
                bgColor="linear-gradient( #0000FF 0%, #0000FF 30%, #FF0000 30%, #FF0000 100%)"
              >
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="purple.400"
                color="white"
                placement="top"
                isOpen={showClimateTooltip}
                label={`${incomSliderValue}%`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
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
            Income
          </Heading>
          <Box mt="12" width="600px" mx="auto">
            <Slider
              id="slider"
              defaultValue={5}
              min={0}
              max={100}
              colorScheme="teal"
              onChange={(v) => setIncomSliderValue(v)}
              onMouseEnter={() => setShowIncomeTooltip(true)}
              onMouseLeave={() => setShowIncomeTooltip(false)}
            >
              <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                25%
              </SliderMark>
              <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                50%
              </SliderMark>
              <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                75%
              </SliderMark>
              <SliderTrack h="10px">
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="purple.400"
                color="white"
                placement="top"
                isOpen={showIncomeTooltip}
                label={`${incomSliderValue}%`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </Box>
        </Box>
      </Box>
      <Button as={NavLink} to="/transport-living" variant="solid">
        Next Step
      </Button>
    </Box>
  );
};

export default IncomeClimate;
