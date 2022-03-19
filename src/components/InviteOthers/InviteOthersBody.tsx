import { Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { InviteButton } from "./InviteButton";
import { InviteCounter } from "./InviteCounter";

export function InviteOthersBody() {
  return (
    <Flex bgColor="gray.50" width="100%" align="center" direction="column">
      <InviteButton />

      <Flex
        align="center"
        justify="space-between"
        width="90%"
        mb="4"
        wrap="wrap"
      >
        <InviteCounter numberOfPending={4} numberOfConnected={2}>
          <Icon as={AiOutlineTeam} fontSize={20} mr="2" />
          <Text>Team Invites</Text>
        </InviteCounter>
        <InviteCounter numberOfPending={6} numberOfConnected={4}>
          <Icon as={AiOutlineUser} fontSize={20} mr="2" />
          <Text>Client Invites</Text>
        </InviteCounter>
      </Flex>
    </Flex>
  );
}
