import { useEffect, useState } from "react";
import PostView from "../../components/PostView";
import styles from "./Home.module.scss";
import axios from "axios";
import { base_URL } from "../../config";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`${base_URL}/posts`);
    // console.log(response.data.posts);
    setPosts(response.data.posts);
  };

  return (
    <div className={styles.homePage}>
      <main>
        {posts.map((post) => {
          return (
            <PostView
              key={post._id}
              title={post.title}
              content={post.content}
              author={post.author}
              publishedDate={post.createdAt}
              updatedDate={post.updatedAt}
            ></PostView>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
