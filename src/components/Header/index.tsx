import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Profile } from "./Profile";

export function Header() {
  return (
    <Box as="header" w="100%" h="16" bgColor="whiteAlpha.900" boxShadow="md">
      <Flex
        align="center"
        h="100%"
        justify="space-between"
        mx="auto"
        px={["2", "6"]}
      >
        <Logo />
        <Profile />
      </Flex>
    </Box>
  );
}
