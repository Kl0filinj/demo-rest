import {
  Box,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react';
import HeadingsPart from '../components/shared/HeadingsPart';
import { useState } from 'react';
import {
  BsThermometerHigh,
  BsThermometerSnow,
  BsThermometerSun,
} from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';
import NextButton from '../components/shared/NextButton';

const IncomeClimate = () => {
  const [climateSliderValue, setClimateSliderValue] = useState(20);
  const [incomSliderValue, setIncomSliderValue] = useState(500);
  // const [showIncomeTooltip, setShowIncomeTooltip] = useState(false);
  // const [showClimateTooltip, setShowClimateTooltip] = useState(false);

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
          <Box mt="12" width="700px" mx="auto">
            <Box display="flex" justifyContent="space-between">
              <Box
                as={BsThermometerSnow}
                display="inline"
                mr="auto"
                color="blue.600"
              />
              <Box
                as={BsThermometerSun}
                display="inline"
                ml="auto"
                color="red.600"
              />
            </Box>
            <Slider
              id="slider"
              defaultValue={20}
              min={-10}
              max={40}
              step={5}
              onChange={(v) => setClimateSliderValue(v)}
              // onMouseEnter={() => setShowClimateTooltip(true)}
              // onMouseLeave={() => setShowClimateTooltip(false)}
            >
              <SliderMark value={-10} mt="3" ml="-2.5" fontSize="sm">
                -10⁰С
              </SliderMark>
              <SliderMark value={-5} mt="3" ml="-2.5" fontSize="sm">
                -5⁰С
              </SliderMark>
              <SliderMark value={0} mt="3" ml="-2.5" fontSize="sm">
                0⁰С
              </SliderMark>
              <SliderMark value={5} mt="3" ml="-2.5" fontSize="sm">
                +5⁰С
              </SliderMark>
              <SliderMark value={10} mt="3" ml="-2.5" fontSize="sm">
                +10⁰С
              </SliderMark>
              <SliderMark value={20} mt="3" ml="-2.5" fontSize="sm">
                +20⁰С
              </SliderMark>
              <SliderMark value={30} mt="3" ml="-2.5" fontSize="sm">
                +30⁰С
              </SliderMark>
              <SliderMark value={40} mt="3" ml="-2.5" fontSize="sm">
                +40⁰С
              </SliderMark>

              <SliderTrack
                h="10px"
                bg="linear-gradient(to right, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0.8) 15%, rgba(255, 0, 0, 0.8) 70%, rgba(255, 0, 0, 0.8) 100%)"
              >
                <SliderFilledTrack bgColor="transparent" />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="purple.400"
                color="white"
                placement="top"
                isOpen={true}
                label={`${climateSliderValue}⁰С`}
              >
                <SliderThumb boxSize={6}>
                  <Box color="black" as={BsThermometerHigh} />
                </SliderThumb>
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
          <Box mt="12" width="650px" mx="auto">
            <Slider
              id="slider"
              defaultValue={500}
              min={500}
              max={10000}
              step={500}
              colorScheme="whatsapp"
              onChange={(v) => setIncomSliderValue(v)}
              // onMouseEnter={() => setShowIncomeTooltip(true)}
              // onMouseLeave={() => setShowIncomeTooltip(false)}
            >
              <SliderMark value={1000} mt="3" ml="-2.5" fontSize="sm">
                1,000$
              </SliderMark>
              <SliderMark value={2000} mt="3" ml="-2.5" fontSize="sm">
                2,000$
              </SliderMark>
              <SliderMark value={3000} mt="3" ml="-2.5" fontSize="sm">
                3,000$
              </SliderMark>
              <SliderMark value={4000} mt="3" ml="-2.5" fontSize="sm">
                4,000$
              </SliderMark>
              <SliderMark value={5000} mt="3" ml="-2.5" fontSize="sm">
                5,000$
              </SliderMark>
              <SliderMark value={6000} mt="3" ml="-2.5" fontSize="sm">
                6,000$
              </SliderMark>
              <SliderMark value={7000} mt="3" ml="-2.5" fontSize="sm">
                7,000$
              </SliderMark>
              <SliderMark value={8000} mt="3" ml="-2.5" fontSize="sm">
                8,000$
              </SliderMark>
              <SliderMark value={9000} mt="3" ml="-2.5" fontSize="sm">
                9,000$
              </SliderMark>
              <SliderMark value={10000} mt="3" ml="-2.5" fontSize="sm">
                10,000$
              </SliderMark>
              <SliderTrack h="10px">
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="purple.400"
                color="white"
                placement="top"
                isOpen={true}
                label={`${incomSliderValue}$`}
              >
                <SliderThumb boxSize={6}>
                  <Box color="black" as={AiFillDollarCircle} />
                </SliderThumb>
              </Tooltip>
            </Slider>
          </Box>
        </Box>
      </Box>
      <NextButton to="/transport-living" />
    </Box>
  );
};

export default IncomeClimate;
