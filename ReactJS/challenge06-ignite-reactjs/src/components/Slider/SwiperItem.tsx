import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

export const SwiperItem = ({
  children,
  imgs,
}: {
  children: ReactNode;
  imgs: string[];
}) => {
  return (
    <>
      <Flex
        position="relative"
        width="100%"
        height={["15rem", "15rem", "20rem"]}
        bg="rgba(0, 0, 0, 0.5)"
        left="0"
        top="0"
        zIndex="1"
        align="center"
        textAlign="center"
        justify="center"
      >
        {children}
      </Flex>
      <Image
        src={imgs[0]}
        layout="fill"
        objectFit="cover"
        objectPosition={`100% 90%`}
        alt={imgs[0]}
      />
    </>
  );
};
