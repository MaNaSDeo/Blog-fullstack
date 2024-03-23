import { useEffect, useState } from "react";
import PostPreview from "../../components/PostPreview";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import styles from "./Dashboard.module.scss";
import { base_URL } from "../../config";

const Dashboard = () => {
  const authodId = localStorage.getItem("user");
  console.log(authodId);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  // fetch posts by logged in userId
  const fetchData = async () => {
    try {
      const posts = await axios.get(`${base_URL}/posts/${authodId}`);
      // console.log(posts.data.posts);
      setPosts(posts.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (postId) => {
    const url = `/post/${postId}/edit`;
    console.log("edit");
    navigate(url);
  };

  const handleDelete = async (postId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!isConfirmed) {
      return;
    }

    // console.log("Deleted", postId);
    const authToken = localStorage.getItem("token");

    try {
      // API call to delete
      const res = await axios.delete(`${base_URL}/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (res.status === 200) {
        enqueueSnackbar("post deleted successfully", { variant: "success" });
        // alert("Post deleted successfully.");
        const updatedPosts = posts.filter((post) => post._id !== postId);
        // console.log(updatedPosts);
        setPosts(updatedPosts);
      } else {
        // enqueueSnackbar(res.response.data , {variant: 'error'});
        alert("Failed to delete post.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNew = () => {
    const url = `/post/new`;
    console.log("new");
    navigate(url);
  };

  return (
    <div className={styles.dashboardPage}>
      <Button onClick={handleNew}>Add New</Button>
      {posts.map((post) => {
        return (
          <PostPreview
            title={post.title}
            content={post.content}
            key={post.id}
            author={post.author}
            onDelete={() => {
              handleDelete(post._id);
            }}
            onEdit={() => {
              handleEdit(post._id);
            }}
          ></PostPreview>
        );
      })}
    </div>
  );
};

export default Dashboard;
