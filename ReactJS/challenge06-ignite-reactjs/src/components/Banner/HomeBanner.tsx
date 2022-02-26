import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

export const HomeBanner = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      position="absolute"
      left="0"
      top="0"
      zIndex="10"
      justify="space-around"
      pt={["1.75rem", "2rem"]}
      pl={["1rem"]}
    >
      <Box>
        <Text fontSize={["20px", "36px"]} fontWeight="500" color="white">
          5 Continents, <br /> infinite possibilities
        </Text>
        <Text fontSize={[, "20px"]} mt="0.5rem" color="gray.300">
          The time has come to take off the paper the journey <br />
          you ve always dreamed.
        </Text>
      </Box>

      {isWideVersion && (
        <Flex h="100%" justify="end">
          <Image
            src="/images/Airplane.png"
            width="417"
            height="270"
            alt="airplane"
          />
        </Flex>
      )}
    </Flex>
  );
};
