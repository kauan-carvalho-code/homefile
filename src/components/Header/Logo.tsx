import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillHouseDoorFill } from "react-icons/bs";

export function Logo() {
  return (
    <Flex w="36" align="center">
      <Icon as={BsFillHouseDoorFill} fontSize={["1xl", "2xl"]} mr="2" />
      <Text fontSize={["sm", "lg"]} fontWeight="bold">
        Homefile
      </Text>
    </Flex>
  );
}
