import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Box mx="auto" maxWidth="101px">
      <Image
        alt="World trip logo"
        src="/images/Logo.png"
        width={101}
        height={26}
      />
    </Box>
  );
};
