import { Box } from "@chakra-ui/react";
import { MyHomeFilesBody } from "./MyHomeFilesBody";
import { MyHomeFilesHeader } from "./MyHomeFilesHeader";

export function MyHomeFiles() {
  return (
    <Box width="100%" boxShadow="md">
      <MyHomeFilesHeader />

      <MyHomeFilesBody />
    </Box>
  );
}
