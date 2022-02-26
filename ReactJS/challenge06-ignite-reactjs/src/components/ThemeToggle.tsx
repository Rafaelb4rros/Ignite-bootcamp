import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center">
      <Icon as={MdDarkMode} mr="2" />
      <FormLabel htmlFor="theme-toggle" mb="0">
        Dark Theme:
      </FormLabel>

      <Switch id="theme-toggle" onChange={toggleColorMode} />
    </FormControl>
  );
};
