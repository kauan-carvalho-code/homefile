import { Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

export function InviteOthersHeader() {
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
        <Icon as={AiOutlineMail} fontSize={["1xl", "2xl"]} mr="2" />
        <Text fontSize={["sm", "md"]}>Invite Others</Text>
      </Flex>
      <Icon as={BsThreeDots} fontSize={["1xl", "2xl"]} cursor="pointer" />
    </Flex>
  );
}
