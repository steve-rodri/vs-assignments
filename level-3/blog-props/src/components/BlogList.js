import React from "react";
import BlogPost from "./BlogPost";
import blogposts from "../blogposts.json";
import "./BlogList.css";

const BlogList = () => {
  return (
    <div className="BlogList">
      {blogposts.map((blogpost, i) => (
        <BlogPost key={`${i}-${blogpost}`} {...blogpost} />
      ))}
      <div className="button-container">
        <button>Older Posts ➝ </button>
      </div>
    </div>
  );
};

export default BlogList;
