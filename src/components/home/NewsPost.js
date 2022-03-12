import { Card } from "antd";
import React from "react";

const NewsPost = ({ title, content }) => {
  return (
    <Card
      title={title}
      style={cardStyle}
      hoverable={true}
      cover={
        <img
          alt="panrobert"
          src="https://bi.im-g.pl/im/a7/8b/18/z25737127AMP,Robert-Maklowicz.jpg"
          style={imgStyle}
        />
      }
    >
      {content}
    </Card>
  );
};

export default NewsPost;

const cardStyle = {
  margin: "20px",
  justifyContent: "center",
};

const imgStyle = {
  display: "flex",
  width: "40%",
  justifyContent: "center",
};
