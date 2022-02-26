import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const TravelType = ({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <Text
      mb="1.6rem"
      mx="1rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="#47585B"
      fontSize="1.125rem"
      fontWeight="500"
      flexDirection={["row", "row", "column"]}
    >
      {isWideVersion && isMounted ? (
        <Box as="span" mb="5">
          <Image src={icon} width="50" height="50" alt={title} />
        </Box>
      ) : (
        <Text
          as="span"
          mr="0.5rem"
          w="0.5rem"
          h="0.5rem"
          bg="#ffba08"
          borderRadius="full"
        />
      )}

      {title}
    </Text>
  );
};
