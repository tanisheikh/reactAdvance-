import React, { useEffect, useState } from "react";
import axios from 'axios'

const DataFetcingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("Somthing Went Wrong !!");
        setPost({});
      });
  }, []);
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetcingOne;
