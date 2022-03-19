import { Box } from "@chakra-ui/react";
import { InviteOthersBody } from "./InviteOthersBody";
import { InviteOthersHeader } from "./InviteOthersHeader";

export function InviteOthers() {
  return (
    <Box width="100%" boxShadow="md" mt="4">
      <InviteOthersHeader />

      <InviteOthersBody />
    </Box>
  );
}
