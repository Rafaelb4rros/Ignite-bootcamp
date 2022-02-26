import { Flex, Text } from "@chakra-ui/react";

export const ContinentBanner = ({ title }: { title: string }) => {
  return (
    <Flex
      w={["full", "full", "58vw"]}
      h={["full", "full", "auto"]}
      mx="auto"
      position="absolute"
      right="0"
      left="0"
      bottom={["0", "0", "3rem"]}
      zIndex="10"
      align="center"
      justify={["center", "center", "start"]}
    >
      <Text as="h1" fontSize="48px" fontWeight="600" color="white">
        {title}
      </Text>
    </Flex>
  );
};
