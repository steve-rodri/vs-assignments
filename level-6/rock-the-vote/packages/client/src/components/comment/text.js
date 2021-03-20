import { Text } from "@chakra-ui/react";
import Link from "../Link";
import moment from "moment";

export const Body = ({ body }) => {
  return <Text>{body}</Text>;
};

export const Date = ({ date }) => {
  const timePosted = moment(date).fromNow();
  return <Text>{timePosted}</Text>;
};

export const Creator = ({ creator }) => {
  return (
    <Link to={`/users/${creator._id}`}>
      <Text>{`@${creator.username}`}</Text>
    </Link>
  );
};
