import { Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { InviteButton } from "./InviteButton";
import { InviteCounter } from "./InviteCounter";

export function InviteOthersBody() {
  return (
    <Flex bgColor="gray.50" width="100%" direction="column">
      <InviteButton />

      <SimpleGrid minChildWidth="140px" spacing={2} px="4" mb="4">
        <InviteCounter numberOfPending={4} numberOfConnected={2}>
          <Icon as={AiOutlineTeam} fontSize={["1xl", "2xl"]} mr="2" />
          <Text fontSize={["sm", "md"]}>Team Invites</Text>
        </InviteCounter>
        <InviteCounter numberOfPending={6} numberOfConnected={4}>
          <Icon as={AiOutlineUser} fontSize={["1xl", "2xl"]} mr="2" />
          <Text fontSize={["sm", "md"]}>Client Invites</Text>
        </InviteCounter>
      </SimpleGrid>
    </Flex>
  );
}
