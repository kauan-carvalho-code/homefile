import { Box } from "@chakra-ui/react";
import { SendDocumentBody } from "./SendDocumentBody";
import { SendDocumentHeader } from "./SendDocumentHeader";

export function SendDocument() {
  return (
    <Box width="100%" boxShadow="md">
      <SendDocumentHeader />

      <SendDocumentBody />
    </Box>
  );
}
