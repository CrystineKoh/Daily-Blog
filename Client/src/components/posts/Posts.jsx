import "./Posts.css";
import Post from "../post/Post";
// import headerPic from "../../assets/HeaderPic.png";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {/* <Post img={headerPic} />
      <Post img={headerPic} />
      <Post img={headerPic} />
      <Post img={headerPic} />
      <Post img={headerPic} /> */}

      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
