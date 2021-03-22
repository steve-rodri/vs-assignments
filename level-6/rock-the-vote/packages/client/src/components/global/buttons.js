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
export const TrashButton = ({ onClick }) => (
  <IconButton aria-label="trash" icon={<DeleteIcon />} onClick={onClick} />
);
export const EditButton = ({ onClick }) => (
  <IconButton aria-label="edit" icon={<EditIcon />} onClick={onClick} />
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

export const CommentsButton = ({ onClick, number }) => (
  <Button onClick={onClick} leftIcon={<ChatIcon />}>
    <Text>{number}</Text>
  </Button>
);

export const DeleteButton = ({ onClick, focusRef }) => (
  <Button
    variant="delete"
    icon={<DeleteIcon />}
    onClick={onClick}
    ref={focusRef}
  >
    <Text>DELETE</Text>
  </Button>
);

export const UpvoteButton = ({ onClick, votes, highlight }) => (
  <Button
    onClick={onClick}
    variant={highlight ? "upvote" : null}
    leftIcon={<TriangleUpIcon color={!highlight && "green.700"} />}
  >
    <Text>{votes.up}</Text>
  </Button>
);
export const DownvoteButton = ({ onClick, votes, highlight }) => (
  <Button
    onClick={onClick}
    variant={highlight ? "downvote" : null}
    leftIcon={<TriangleDownIcon color={!highlight && "red.700"} />}
  >
    <Text>{votes.down}</Text>
  </Button>
);
