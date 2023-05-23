import {
  Avatar,
  Box,
  Button,
  Fade,
  HStack,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ConfettiEffect from '../components/shared/ConfettiEffect';
import HeadingsPart from '../components/shared/HeadingsPart';
import seaPoster from '../assets/sea-result.jpeg';
import forestPoster from '../assets/forest-result.jpeg';
import mountainPoster from '../assets/mountains-result.jpeg';
import desertPoster from '../assets/desert-result.jpeg';
import StarsRating from '../components/shared/StarsRating';

const results = [
  {
    poster: seaPoster,
    title: 'Зустрічай літо на морі Elena',
    description:
      'Готель Elena All Inclusive розташований на курорті Золоті піски, лише за 200 метрів від пляжу та головної торгової вулиці. До послуг гостей відкритий басейн, критий басейн із підігрівом та номери з балконом, кондиціонером і безкоштовним Wi-Fi. У помешканні працює команда аніматорів.',
    link: 'https://www.poehalisnami.ua/ua/tour/bolgariya/zolotye-peski/elena-200606-hot#iAP=hottours&iAL=links&iAC=HOT',
    location: 'Болгарія, Золоті піски',
    category: 'Sea',
    rating: 4.4,
  },
  {
    poster: mountainPoster,
    title: 'SVOBODA SMART HOTEL',
    description:
      'Смарт будинок для 2-4 осіб в стилі мінімалізм з елементами гуцульської культури. Концепція будинку — створити комфорт міста, перебуваючи в мальовничих Карпатах.Велика тераса з гамаком і чудовим краєвидом зробить Ваш відпочинок незабутнім.Є тераса, мангал, зона вогню, парковка. Краєвид на гори.Ласкаво просимо до нашого приватного котеджу у селі Микуличин, розташованого в прекрасній природі Великих Карпат!',
    link: 'https://booking.karpaty.ua/uk/houses/svoboda-smart-hotel',
    location: 'Івано-Франківська область, Микуличин',
    category: 'Mountains',
    rating: 5,
  },
  {
    poster: desertPoster,
    title: 'Готель Ibis',
    description:
      'Готель Ibis Amman розташований в самому серці ділового та розважального району. Гостям надається безкоштовний бездротовий доступ до Інтернету та комфортабельні номери поруч з Йорданським університетом, торговими центрами, кафе і ресторанами.Готель має зручне розташування, якщо ви плануєте вивчити місто і досліджувати околиці, в тому числі Мертве море, Петру, гору Нево і інші визначні пам`ятки.',
    link: 'https://www.poehalisnami.ua/ua/hotels/iordaniya/amman/ibis',
    location: 'Йорданія, Амман',
    category: 'Desert',
    rating: 4.6,
  },
  {
    poster: forestPoster,
    title: 'Готельно-ресторанний комплекс "Селена Family Resort"',
    description:
      '“Селена Family Resort” – готель в Черкасах, який розташований прямо на березі річки Дніпро. Тут приголомшлива природа, свіже повітря, тиша – то, чого так не вистачає міським жителям. Саме завдяки своєму розташуванню заміські готелі Черкас користуються такою популярністю. У заміському комплексі знайдуться варіанти як активного, так і спокійного дозвілля.',
    link: 'https://www.poehalisnami.ua/ua/hotels/iordaniya/amman/ibis',
    location: 'Свидівок, Черкаська область',
    category: 'Forest',
    rating: 4,
  },
];

const Result = () => {
  const [isDataReady, setIsDataReady] = useState(false);

  const formatDescription = (text) => {
    if (text.length < 285) {
      return text;
    }
    const formedText = text.slice(0, 285) + ' ...';
    return formedText;
  };

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
      <Box maxW="1300px" mx="auto" mt="20">
        {isDataReady ? (
          <Fade in={isDataReady}>
            <Wrap spacing="30px" justify="center">
              {results.map(
                ({
                  poster,
                  title,
                  description,
                  link,
                  location,
                  category,
                  rating,
                }) => (
                  <WrapItem key={link}>
                    <Box
                      textAlign="start"
                      maxW={'400px'}
                      minH="686px"
                      w={'full'}
                      bg={'gray.900'}
                      boxShadow={'2xl'}
                      rounded={'md'}
                      p={6}
                      overflow={'hidden'}
                    >
                      <Box bg={'gray.100'} mt={-6} mx={-6} mb={6}>
                        <Image src={poster} layout={'fill'} h="245px" />
                      </Box>
                      <Stack>
                        <Text
                          color={'green.500'}
                          textTransform={'uppercase'}
                          fontWeight={800}
                          fontSize={'sm'}
                          letterSpacing={1.1}
                        >
                          {category}
                        </Text>
                        <Text color="gray.600">{location}</Text>
                        <Heading
                          color={'white'}
                          fontSize={'2xl'}
                          fontFamily={'body'}
                        >
                          {title}
                        </Heading>
                        <StarsRating rating={rating} />
                        <Text color={'gray.500'}>
                          {formatDescription(description)}
                        </Text>
                      </Stack>
                      <Stack
                        mt={6}
                        direction={'row'}
                        spacing={4}
                        align={'center'}
                      >
                        <Button
                          as="a"
                          href={link}
                          mt={10}
                          w={'full'}
                          bg={'purple.400'}
                          color={'white'}
                          rounded={'xl'}
                          boxShadow={'0 5px 20px 0px rgb(159 122 234 / 43%)'}
                          _hover={{
                            bg: 'purple.500',
                          }}
                          _focus={{
                            bg: 'purple.500',
                          }}
                        >
                          Visit Website
                        </Button>
                      </Stack>
                    </Box>
                  </WrapItem>
                )
              )}
            </Wrap>
          </Fade>
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
