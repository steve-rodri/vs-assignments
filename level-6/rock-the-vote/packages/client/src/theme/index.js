import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: { initialColorMode: "dark" },
  components: {
    Button: {
      variants: {
        upvote: { bgColor: "green.700" },
        downvote: { bgColor: "red.700" },
        delete: { bgColor: "red.600" },
      },
    },
    Text: {
      variants: {
        body: { color: "gray.400" },
        error: { color: "red.700" },
      },
    },
  },
});

export default theme;
