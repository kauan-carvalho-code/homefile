import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillHouseDoorFill, BsThreeDots } from "react-icons/bs";

export function MyHomeFilesHeader() {
  return (
    <Flex
      align="center"
      justify="space-between"
      bgColor="whiteAlpha.900"
      height="16"
      width="100%"
      p="3"
    >
      <Flex align="center">
        <Icon as={BsFillHouseDoorFill} fontSize={26} mr="2" />
        <Text>My Homefiles</Text>
      </Flex>

      <Icon as={BsThreeDots} fontSize={26} cursor="pointer" />
    </Flex>
  );
}
