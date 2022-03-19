import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

interface FileCardProps {
  name: string;
  image: string;
  address: string;
  cityState: string;
}

export function FileCard({ name, image, address, cityState }: FileCardProps) {
  return (
    <Flex
      bgColor="whiteAlpha.900"
      direction="column"
      borderRadius={4}
      boxShadow="md"
      height={["280px", "240px"]}
    >
      <Flex align="center" h="10%">
        <Icon
          ml="auto"
          mr="1"
          as={BsThreeDots}
          fontSize={["1xl", "2xl"]}
          cursor="pointer"
        />
      </Flex>
      <Image src={image} alt={name} h="50%" />
      <Box h="40%" px="2">
        <Text fontWeight="bold" my="2" fontSize={["sm", "md"]}>
          {name}
        </Text>
        <Text fontSize="sm">{address}</Text>
        <Text fontSize="sm">{cityState}</Text>
      </Box>
    </Flex>
  );
}
