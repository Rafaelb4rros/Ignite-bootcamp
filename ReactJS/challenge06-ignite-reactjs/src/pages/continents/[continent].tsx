import {
  Box,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { BsExclamationCircle } from "react-icons/bs";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { api } from "../../lib/api";
import { Continents } from "../../shared/types";

export default function Continent({ continent }: { continent: Continents }) {
  const router = useRouter();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(1);

  if (router.isFallback) {
    return <>...</>;
  }

  return (
    <>
      <Head>
        <title>{`${continent.name} - ${continent.title} | World Travel`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header withBackButton />
      <Banner
        img={continent.imgs[currentBannerIndex] || "images/banner.png"}
        title={continent.name}
      />

      <Flex
        flexDir={["column", "column", "row"]}
        gap="5"
        maxW="70rem"
        maxH="100vh"
        px="3"
        mx="auto"
      >
        <Flex mt="1.5rem" maxW="40rem">
          <Text lineHeight="1.3rem" color="#47585B" textAlign="justify">
            {continent.description}
          </Text>
        </Flex>

        <Flex flex="1" mt="1.5rem">
          <HStack
            position="relative"
            mx="auto"
            spacing="5"
            justify={["space-around", "center"]}
            flexFlow="row wrap"
            w="100%"
          >
            <Text
              textAlign="center"
              fontWeight={600}
              fontSize="1.75rem"
              color="#FFBA08"
              display="flex"
              flexDir="column"
            >
              {continent.countries_number}
              <Text fontSize="1rem" color="#47585B" as="span">
                Countries
              </Text>
            </Text>

            <Text
              textAlign="center"
              fontWeight={600}
              fontSize="1.75rem"
              color="#FFBA08"
              display="flex"
              flexDir="column"
            >
              {continent.countries_number}
              <Text fontSize="1rem" color="#47585B" as="span">
                Languages
              </Text>
            </Text>

            <Text
              textAlign="center"
              fontWeight={600}
              fontSize="1.75rem"
              color="#FFBA08"
              display="flex"
              flexDir="column"
            >
              {continent.plusCities}
              <Text fontSize="1rem" color="#47585B" as="span">
                Cities 100+
              </Text>
            </Text>
            <Tooltip label="Most famous cities" aria-label="tooltip">
              <span>
                <Icon size="12px" color="#47585B" as={BsExclamationCircle} />
              </span>
            </Tooltip>
          </HStack>
        </Flex>
      </Flex>
      <Box py={["2", "2"]} px="5" maxW="70rem" mx="auto" mt="7">
        <Text as="h1" color="#47585b" fontSize="36px">
          +100 Cities
        </Text>
      </Box>
      {continent.cities.length > 0 && (
        <Flex
          mt="3"
          flexFlow="row wrap"
          maxW="80vw"
          mx="auto"
          justify="center"
          align="center"
          gap="5"
          py="7"
        >
          {continent.cities.map(({ city }) => (
            <Flex
              key={city.name}
              minW="17rem"
              direction="column"
              borderRadius="4px"
              overflow="hidden"
              border="solid 1px #FFBA0880"
            >
              <Box position="relative" width="100%" height="10rem">
                <Image
                  alt="background"
                  src={city.img}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={`100% 50%`}
                />
              </Box>
              <Flex p="5" justify="space-between" align="center">
                <Stack spacing="4">
                  <Text fontWeight={600} fontSize="1.25rem" color="#47585B">
                    {city.name}
                  </Text>
                  <Text fontWeight={500} color="#999999">
                    {city.country}
                  </Text>
                </Stack>
                <Image
                  src={city.icon}
                  width="30"
                  height="30"
                  alt={city.country}
                />
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: continents } = await api.get("/continents");

  const paths = continents.map((continent) => ({
    params: { continent: continent.name },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { continent: continentName },
}) => {
  try {
    const { data: continent } = await api.get<Continents | undefined>(
      `continents/${continentName}`
    );

    return {
      props: {
        continent,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};