import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ContinentBanner } from "./ContinentBanner";
import { HomeBanner } from "./HomeBanner";

export const Banner = ({
  img,
  title,
  homeBanner = false,
}: {
  img: string;
  title?: string;
  homeBanner?: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <Flex
      width="100vw"
      h={["11rem", "15rem", `${homeBanner ? "15rem" : "30rem"} `]}
      position="relative"
    >
      <Image
        alt="background"
        src={img}
        layout="fill"
        objectFit="cover"
        objectPosition={`100% ${homeBanner ? "20%" : "60%"}`}
      />

      {homeBanner && isMounted ? (
        <HomeBanner />
      ) : (
        <ContinentBanner title={title} />
      )}
    </Flex>
  );
};
