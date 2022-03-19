import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface InviteCounterProps {
  children: ReactNode;
  numberOfPending: number;
  numberOfConnected: number;
}

export function InviteCounter({
  children,
  numberOfPending,
  numberOfConnected,
}: InviteCounterProps) {
  return (
    <Flex
      bgColor="whiteAlpha.900"
      height="100px"
      width="100%"
      boxShadow="md"
      borderRadius={4}
      p="2"
      direction="column"
      justify="space-between"
    >
      <Flex align="center">{children}</Flex>
      <Box color="gray.200">
        <Flex
          borderBottom="1px"
          borderColor="gray.200"
          align="center"
          justify="space-between"
          py="0.2"
        >
          <Text fontSize={14}>Pending</Text>
          <Text fontSize={20}>{numberOfPending}</Text>
        </Flex>
        <Flex align="center" justify="space-between" pt="1">
          <Text fontSize={12}>Total connected</Text>
          <Text fontSize={14}>{numberOfConnected}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
