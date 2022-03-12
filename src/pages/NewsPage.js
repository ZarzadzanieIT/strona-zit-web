import React from "react";
import TitleText from "../components/common/TitleText";
import NewsPost from "../components/home/NewsPost";

const posts = [
  {
    title: "New post 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit magna, consectetur hendrerit massa quis, gravida volutpat felis. In hac habitasse platea dictumst. Donec eget elementum nulla. Nam quis enim justo. Curabitur id augue vel erat dignissim dapibus. Integer facilisis ut sapien vel iaculis. Morbi efficitur nisi augue, a pellentesque velit rutrum vitae. Quisque sit amet vulputate turpis. Pellentesque fringilla, ex a eleifend eleifend, orci nisl rutrum sem, auctor imperdiet ex sem vel diam.",
  },
  {
    title: "New post 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit magna, consectetur hendrerit massa quis, gravida volutpat felis. In hac habitasse platea dictumst. Donec eget elementum nulla. Nam quis enim justo. Curabitur id augue vel erat dignissim dapibus. Integer facilisis ut sapien vel iaculis. Morbi efficitur nisi augue, a pellentesque velit rutrum vitae. Quisque sit amet vulputate turpis. Pellentesque fringilla, ex a eleifend eleifend, orci nisl rutrum sem, auctor imperdiet ex sem vel diam.",
  },
];

const NewsPage = () => {
  return (
    <a name="news" style={{pointerEvents: "none", cursor: 'default'}}>
      <div>
        <TitleText text="Aktualności" />
        {posts.map((post) => (
          <NewsPost title={post.title} content={post.content} />
        ))}
      </div>
    </a>
  );
};

export default NewsPage;
