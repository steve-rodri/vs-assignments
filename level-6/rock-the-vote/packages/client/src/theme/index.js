import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: true },
  components: {
    Button: {
      variants: {
        upvote: { bgColor: "green.700", color: "gray.100" },
        downvote: { bgColor: "red.700", color: "gray.100" },
        delete: { bgColor: "red.600" },
        username: {
          color: "blue.400",
          p: 0,
          _hover: { textDecoration: "underline" },
        },
      },
    },
    Text: {
      variants: {
        body: { color: "gray.500" },
        error: { color: "red.700" },
      },
    },
  },
});

export default theme;
