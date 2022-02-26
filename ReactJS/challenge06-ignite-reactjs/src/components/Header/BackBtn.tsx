import { Icon, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ThemeToggle } from "../ThemeToggle";

export const BackBtn = () => {
  return (
    <Link href="/" passHref>
      <ChakraLink>
        <IconButton
          display="grid"
          placeItems="center"
          variant="unstyled"
          type="button"
          aria-label="Back to home"
          icon={
            <Icon fontSize="2rem" as={MdKeyboardArrowLeft} color="#47585B" />
          }
        />
      </ChakraLink>
    </Link>
  );
};
