import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillHouseDoorFill } from "react-icons/bs";

export function Logo() {
  return (
    <Flex w="36" align="center">
      <Icon as={BsFillHouseDoorFill} fontSize={24} mr="2" />
      <Text fontSize={["md", "lg"]} fontWeight="bold">
        Homefile
      </Text>
    </Flex>
  );
}
