import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetQueries } from "./Queries";
import { useNavigate } from 'react-router-dom'

function PostList(props){
    const navigate = useNavigate()
    const  { isLoading, isFetching , data , isError } = useQuery(['fetchPost'],GetQueries, {
        retry:1,
        retryDelay:500
    })
    // console.log(data)
    if(isLoading){
        return <p>Loading....</p>
    }
    if(isError){
        return <p>Have a fetching error</p>
    }


     return(
        <>
        <div className="container">

        { isFetching && <p>Updating Data...</p>}
         {data.map((post)=>{
            return(
                <div key={post.id}>
                    <p>Post Id : {post.id}</p>
                    <h4>Name : {post.name}</h4>
                    <p>Body : {post.body}</p>
                    <button onClick={()=>navigate(`/posts/${post.id}`)}>view</button>
                </div>
            )
         })}
         </div>
         </>
     )
}
export default PostList;