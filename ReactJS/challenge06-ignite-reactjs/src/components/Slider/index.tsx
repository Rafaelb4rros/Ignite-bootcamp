import { Flex, Text } from "@chakra-ui/react";
import { Continents } from "../../shared/types";
import { Slider } from "./Slider";

export const SliderSection = ({ continents }: { continents: Continents[] }) => {
  return (
    <Flex direction="column" position="relative">
      <Text
        css={{
          ":before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            margin: "0 auto",
            height: "1px",
            maxWidth: "3rem",
            background: "#47585B",
          },
        }}
        pt="1.5rem"
        as="h1"
        color="#47585B"
        maxW="80vw"
        mx="auto"
        textAlign="center"
        fontWeight="500"
        fontSize={["1.25rem", , "1.5rem"]}
      >
        Lets go? <br />
        So choose your continent
      </Text>
      <Slider continents={continents} />
    </Flex>
  );
};
