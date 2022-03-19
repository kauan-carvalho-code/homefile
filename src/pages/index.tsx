import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { InviteOthers } from "../components/InviteOthers";
import { MyHomeFiles } from "../components/MyHomeFiles";
import { SendDocument } from "../components/SendDocument";
import { Welcome } from "../components/Welcome";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <body>
        <Header />

        <Flex mx="auto" align="center" direction="column" paddingBottom="80px">
          <Welcome />

          <Flex w="100%" px={["2", "6"]} direction={["column", "row"]}>
            <Flex w={["100%", "70%"]}>
              <MyHomeFiles />
            </Flex>
            <Flex
              w={["100%", "29%"]}
              ml="auto"
              mt={["8", "0"]}
              direction="column"
            >
              <SendDocument />
              <InviteOthers />
            </Flex>
          </Flex>
        </Flex>
      </body>
    </div>
  );
}

export default Home;
