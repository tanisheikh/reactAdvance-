import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id,setId]=useState(1);
  const [handleClickBtnId,setHandleClickBtnId]=useState("")
  const url = `https://jsonplaceholder.typicode.com/posts/${handleClickBtnId}`;

  const fetchData=async ()=>{
const Res= await fetch(url);
const json=await Res.json()
setPost(json)
  }
  const handleClickEvent=()=>{
    setHandleClickBtnId(id)
  }
  useEffect(() => {
    fetchData()
      axios
      .get(url)
      .then((res) =>setPost(res.data))
    //   .catch(error=>error)
  }, [handleClickBtnId]);
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
        <button onClick={handleClickEvent}>Fetch data with ID</button>
       <h1>{post.title}</h1> 
      {/* <ul>
        {post.map((data,index) => {
          return (
            <React.Fragment key={index}>
              <li>{data.title}</li>
            </React.Fragment>
          );
        })}
      </ul> */}
    </div>
  );
};

export default DataFetching;
