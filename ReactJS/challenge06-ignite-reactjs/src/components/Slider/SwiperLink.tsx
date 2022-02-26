import { Text, Link as ChakraLink } from "@chakra-ui/react";

import Link from "next/link";

export const SwiperLink = ({
  title,
  name,
}: {
  title: string;
  name: string;
}) => {
  return (
    <Link href={`/continents/${name}`} passHref>
      <ChakraLink color="#F5F8FA" fontWeight={700} fontSize={["2rem", "3rem"]}>
        {name}
        <Text
          maxW={["200px", "100%"]}
          mx="auto"
          color=" #DADADA"
          fontSize={["1rem", "1.5rem"]}
        >
          {title}
        </Text>
      </ChakraLink>
    </Link>
  );
};
