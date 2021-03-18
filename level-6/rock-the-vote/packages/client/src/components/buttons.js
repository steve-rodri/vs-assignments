import { IconButton, Button, Text } from "@chakra-ui/react";
import {
  ChatIcon,
  TriangleUpIcon,
  TriangleDownIcon,
  AddIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";

export const AddButton = ({ onClick }) => (
  <IconButton aria-label="add" icon={<AddIcon />} onClick={onClick} />
);
export const DeleteButton = ({ onClick }) => (
  <IconButton aria-label="delete" icon={<DeleteIcon />} onClick={onClick} />
);
export const EditButton = ({ onClick }) => (
  <IconButton aria-label="edit" icon={<EditIcon />} onClick={onClick} />
);

export const CommentsButton = ({ number, onClick }) => (
  <Button onClick={onClick} leftIcon={<ChatIcon />}>
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

export const SubmitButton = ({ type, variant }) => {
  return (
    <Button type="submit" variant={variant} size="lg">
      {type || "SUBMIT"}
    </Button>
  );
};

export const AlreadySignedUpButton = ({ type, switchType }) => {
  return (
    <Button size="sm" variant="link" onClick={switchType}>
      {type === "Login" ? "Sign Up instead..." : "Already Signed Up?"}
    </Button>
  );
};
