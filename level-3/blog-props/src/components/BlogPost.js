import React from "react";

const BlogPost = ({ title, subTitle, author, date }) => {
  return (
    <div className="BlogPost">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <p>
        Posted by <span>{author}</span> on {date}
      </p>
    </div>
  );
};

export default BlogPost;
