import { useEffect, useState } from "react";
import Form from "../Form/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import styles from "./PostEditor.module.scss";

const PostEditor = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const isEditing = !!postId;
  const [postData, setPostData] = useState({ title: "", content: "" });

  useEffect(() => {
    if (isEditing) {
      //   // fetch post data
      setPostData({ title: "title", content: "c" });
    }
  }, []);

  const handleSubmit = async (formData) => {
    const authToken = localStorage.getItem("token");

    if (isEditing) {
      try {
        const res = await axios.put(
          `http://localhost:5000/api/posts/${postId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        // console.log(res);
        if (res.status === 200) {
          enqueueSnackbar("Post updated successfully.", { variant: "success" });
          navigate("/dashboard");
        }
      } catch (error) {
        enqueueSnackbar("error", { variant: "error" });
        console.log(error);
      }

      return;
    }

    //Api request
    try {
      const res = await axios.post(
        "http://localhost:5000/api/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // console.log(res);
      if (res.status === 201) {
        enqueueSnackbar("Post added successfully.", { variant: "success" });
        navigate("/dashboard");
      }
    } catch (error) {
      enqueueSnackbar("error", { variant: "error" });
      console.log(error);
    }
  };

  const inputs = [
    {
      name: "title",
      type: "text",
      placeholder: "Enter your title",
      required: true,
      value: postData.title,
    },
    {
      name: "content",
      type: "textarea",
      placeholder: "Enter your content",
      required: true,
      value: postData.content,
    },
  ];
  return (
    <div className={styles.postEditor}>
      <Form inputs={inputs} onSubmit={handleSubmit}></Form>
    </div>
  );
};

export default PostEditor;
