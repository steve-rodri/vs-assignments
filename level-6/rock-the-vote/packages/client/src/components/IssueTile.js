import React, { useContext } from "react";
import {
  Box,
  Spacer,
  Text,
  Divider,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { UpvoteButton, DownvoteButton, CommentsButton } from "./buttons";
import IssueContext from "../context/IssueContext";
import UserContext from "../context/UserContext";

const Tile = props => {
  return (
    <VStack spacing={2} align="stretch">
      <Head {...props} />
      <Divider />
      <Body {...props} />
      <Footer {...props} />
    </VStack>
  );
};

const Head = ({ title, creator }) => {
  return (
    <VStack spacing={1} align="stretch">
      <Text>{creator.username}</Text>
      <Heading>{title}</Heading>
    </VStack>
  );
};

const Body = ({ description }) => {
  return (
    <Box>
      <Text>{description}</Text>
    </Box>
  );
};

const Footer = props => {
  return (
    <HStack spacing={5} justify="end">
      <Votes {...props} />
      <Spacer />
      <Comments {...props} />
    </HStack>
  );
};

const Votes = props => {
  const { upvote, downvote } = useContext(IssueContext);
  const { user } = useContext(UserContext);
  return (
    <HStack spacing={2}>
      <UpvoteButton
        {...props}
        onClick={() => upvote(props)}
        highlight={props.upvotedUsers.includes(user._id)}
      />
      <DownvoteButton
        {...props}
        onClick={() => downvote(props)}
        highlight={props.downvotedUsers.includes(user._id)}
      />
    </HStack>
  );
};

const Comments = ({ comments }) => {
  return (
    <Box>
      <CommentsButton number={comments.length} />
    </Box>
  );
};

export default Tile;

// __v: 0
// _id: "60499ce6a713ee4996f62d54"
// comments: Array(4) [ {…}, {…}, {…}, … ]
// creator: Object { _id: "60499ce6a713ee4996f62ccb", username: "mariane_wolff", __v: 0 }
// description: "Mollitia ad inventore magni nisi tenetur dolorem. Accusantium qui vero. Sit ipsum et eum aliquid dolorem quis magnam. Neque voluptate inventore neque at ipsam ea aspernatur rem vel. Est autem ut labore totam sit. Mollitia consequuntur cumque vel ut voluptatum veritatis."
// downvotedUsers: Array(10) [ "60499ce6a713ee4996f62cd4", "60499ce6a713ee4996f62cd3", "60499ce6a713ee4996f62cc9", … ]
// id: "60499ce6a713ee4996f62d54"
// title: "Aperiam architecto architecto ullam totam nemo et culpa vitae."
// upvotedUsers: Array(9) [ "60499ce6a713ee4996f62cce", "60499ce6a713ee4996f62cd5", "60499ce6a713ee4996f62cd0", … ]
// votes: Object { up: 9, down: 10, total: 19 }
