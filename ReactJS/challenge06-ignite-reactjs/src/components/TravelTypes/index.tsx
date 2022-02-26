import { Box, Flex } from "@chakra-ui/react";
import { ITravelTypes } from "../../shared/types";
import { TravelType } from "./TravelType";

export const TravelTypes = ({ data }) => {
  return (
    <Flex
      justify="space-around"
      align="center"
      maxW="80vw"
      mx="auto"
      mt="4rem"
      flexFlow="row wrap"
      marginBottom="1"
    >
      {data.map((item: ITravelTypes) => (
        <Box key={item.title} minW={[, , "10rem"]}>
          <TravelType title={item.title} icon={item.icon_path} />
        </Box>
      ))}
    </Flex>
  );
};
