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
          leftIcon={<AddIcon fontSize={["1xl", "2xl"]} mr="1" />}
        >
          <Text fontWeight="thin" fontSize={["sm", "md"]}>
            NEW HOMEFILE
          </Text>
        </Button>
      </Flex>

      <SimpleGrid minChildWidth="180px" spacing={6} px={["8", "3"]}>
        {homefilesMock.map(({ name, image, address, cityState, id }) => (
          <FileCard
            key={id}
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
