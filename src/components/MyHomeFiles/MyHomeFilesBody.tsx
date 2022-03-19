import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { homefilesMock } from "../../utils/homefilesMock";
import { FileCard } from "./FileCard";

export function MyHomeFilesBody() {
  return (
    <Flex bgColor="gray.50" width="100%" direction="column" pb="16">
      <Flex height="24" align="center">
        <Button
          bgColor="blue.500"
          color="whiteAlpha.900"
          width={["22", "48"]}
          height="14"
          borderRadius={0}
          borderBottomRightRadius="32"
          borderTopRightRadius="32"
          leftIcon={<AddIcon fontSize={[18, 24]} mr="1" />}
        >
          <Text fontWeight="thin" fontSize={[12, 14]}>
            NEW HOMEFILE
          </Text>
        </Button>
      </Flex>

      <SimpleGrid minChildWidth="180px" spacing={6} px="3">
        {homefilesMock.map(({ name, image, address, cityState }) => (
          <FileCard
            name={name}
            image={image}
            address={address}
            cityState={cityState}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
