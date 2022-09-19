import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GetSinglePost } from "./Queries";
import { useQuery } from "@tanstack/react-query";
function Singlepost(props) {
    const [state,setState] = useState({
        name:"",
        body:""
    });
  const params = useParams();
  const id = params.id;
//   console.log(id);
  const { isLoading, isFetching, data, isError } = useQuery(
    ["fetchSinglePost" , {id}],
    GetSinglePost,
    {
      retry: 1,
      retryDelay: 500,
    }
  );
//   console.log(data)
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Have a fetching error</p>;
  }
//   console.log('data',data)

const onChangeHandler = (e)=>{
    e.persist();
    setState(prev=>({
        ...prev,
        [e.target.name] : e.target.value
    }))
}
console.log(state)

  return (
    <>
      <div className="container">
        {isFetching && <p>Updating Data...</p>}
        <div>
          <p>Post Id : {data.id}</p>
          <h4>Name : {data.name}</h4>
          <input type="text" name="name" value={state.name} onChange={onChangeHandler}/>
          <p>Body : {data.body}</p>
          <input type="text"  name="body" value={state.body} onChange={onChangeHandler}/>
          {/* <button onClick={() => navigate(`/posts/${post.id}`)}>view</button> */}
        </div>
      </div>
    </>
  );
}
export default Singlepost;
