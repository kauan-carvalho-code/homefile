import { Button, Flex } from "@chakra-ui/react";

export function SendDocumentBody() {
  return (
    <Flex h="70px" bgColor="gray.50" width="100%" align="center">
      <Button
        variant="unstyled"
        border="1px"
        borderColor="blue.500"
        borderRadius={0}
        bgColor="whiteAlpha.900"
        color="blue.500"
        height="40px"
        width="90%"
        mx="auto"
        _hover={{
          bgColor: "blue.200",
        }}
      >
        Set Up Document
      </Button>
    </Flex>
  );
}
