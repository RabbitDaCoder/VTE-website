import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../api/data";
// import { blogs } from "../../api/data"; // Assuming you have a data file with blog data
const Blogdetails = () => {
  const { id } = useParams();

  // Simulating fetching data based on the id
  // This is where you would typically fetch data from an API
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div>
      <h1>Blog Details</h1>
      <div key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default Blogdetails;
