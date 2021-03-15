import { Button, Text } from "@chakra-ui/react";
import { ChatIcon, TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";

export const CommentsButton = ({ number }) => (
  <Button leftIcon={<ChatIcon />}>
    <Text>{number}</Text>
  </Button>
);

export const UpvoteButton = ({ votes, highlight, onClick }) => (
  <Button
    onClick={onClick}
    variant={highlight ? "upvote" : null}
    leftIcon={<TriangleUpIcon />}
  >
    <Text>{votes.up}</Text>
  </Button>
);

export const DownvoteButton = ({ votes, highlight, onClick }) => (
  <Button
    onClick={onClick}
    variant={highlight ? "downvote" : null}
    leftIcon={<TriangleDownIcon />}
  >
    <Text>{votes.down}</Text>
  </Button>
);
