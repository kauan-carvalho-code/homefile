import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";

export function Welcome() {
  return (
    <Flex height="16" w="100%" align="center" justify="space-between">
      <Text
        fontSize={["sm", "md"]}
        w={["70%", "100%"]}
        lineHeight={1.2}
        pl={["2", "6"]}
      >
        Hi Kauan Carvalho, Welcome to your Property Launchpad
      </Text>

      <Button
        bgColor="blue.500"
        color="whiteAlpha.900"
        width={["22", "44"]}
        height="10"
        borderRadius={0}
        borderBottomLeftRadius="20"
        borderTopLeftRadius="20"
        leftIcon={<AddIcon fontSize={["1xl", "2xl"]} ml="1" />}
      >
        <Text mr="auto" ml="1" fontWeight="thin" fontSize={["sm", "md"]}>
          VIEW
        </Text>
      </Button>
    </Flex>
  );
}
