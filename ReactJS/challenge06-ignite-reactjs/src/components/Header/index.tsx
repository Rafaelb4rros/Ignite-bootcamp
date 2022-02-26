import { Flex } from "@chakra-ui/react";
import { ThemeToggle } from "../ThemeToggle";
import { BackBtn } from "./BackBtn";
import { Logo } from "./Logo";

export const Header = ({ withBackButton }: { withBackButton?: boolean }) => {
  return (
    <Flex as="header" align="center" justify="center" py="6" px="2">
      {withBackButton && <BackBtn />}
      <Logo />
    </Flex>
  );
};
