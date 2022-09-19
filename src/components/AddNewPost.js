import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

function AddNewPost() {
    const [data, setData] = useState({
        "title":'',
        "body":''

    })
    const handleChange = (e)=>{
        if(e.target.id === 'title'){
            setData({...data,title:e.target.value})
        }
        if(e.target.id === 'body'){
            setData({...data,body:e.target.value})
        }
    }

  
    const postData = (post)=>{
        const response = axios.post('https://gorest.co.in/public/v2/users/549/posts',{
            "title":data.title,
            "body":data.body
        },{
            headers:{
                Authorization:'Bearer7a32ce3f8665a1c69c77471f56ec7c6291cbe44368e3d07b9e2c6502a209a9b4'
            }
        })   
     }

     const { mutate , isLoading , isError} = useMutation(postData , {
        onSuccess:(successData)=>{
            console.log(successData)
        }
     })
     if(isLoading){
        return <p> Loading.... </p>
     }
     if(isError){
        return <p>Something is went wrong</p>
     }

     const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        mutate({title:data.title,body:data.body})
        
    }
  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="text" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Body Of The Post
            </label>
            <textarea className="form-control" id="body" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default AddNewPost;
