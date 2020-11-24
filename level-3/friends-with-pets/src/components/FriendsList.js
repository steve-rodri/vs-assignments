import React from "react";
import Friend from "./Friend";
import friends from "../friends.json";

const FriendsList = () => {
  return (
    <ul className="Friends">
      {friends.map((friend, i) => (
        <Friend key={`${i}-${friend.name}`} {...friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
