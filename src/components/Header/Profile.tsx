import { Avatar, Flex, Icon, Text } from "@chakra-ui/react";
import { HiOutlineChevronDown } from "react-icons/hi";

export function Profile() {
  return (
    <Flex align="center" justify="space-between" w={["56", "60"]}>
      <Text fontSize={["sm", "md"]}>Hi, Kauan Carvalho</Text>

      <Avatar size="md" name="Kauan Carvalho" />

      <Icon
        aria-label="Open profile settings"
        as={HiOutlineChevronDown}
        cursor="pointer"
        color="gray.200"
        fontSize={["1xl", "2xl"]}
      />
    </Flex>
  );
}
