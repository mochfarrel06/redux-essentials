import React from "react";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {PostAuthor} from "../users/PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {selectPostById} from "./postsSlice";

export const SinglePostPage = () => {
  const {postId} = useParams();

  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <Link to={`/editpost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
