import React from "react";
import { useParams } from "react-router-dom";
import { notices } from "../../api/data"; // Assuming you have a data file with notice\

const NoticeDetails = () => {
  const { id } = useParams();
  // Simulating fetching data based on the id
  const notice = notices.find((notice) => notice.id === parseInt(id));
  if (!notice) {
    return <div>Notice not found</div>;
  }
  return (
    <div>
      <h1>Notice Details</h1>
      <div key={notice.id}>
        <h2>{notice.title}</h2>
        <p>{notice.content}</p>
        <p>Date: {notice.date}</p>
      </div>
    </div>
  );
};

export default NoticeDetails;
