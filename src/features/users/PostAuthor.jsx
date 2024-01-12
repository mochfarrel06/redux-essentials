import React from "react";
import {useSelector} from "react-redux";

export const PostAuthor = ({userId}) => {
  const author = useSelector((state) =>
    state.users.find((post) => post.id === Number(userId) || post.id === userId)
  );

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
