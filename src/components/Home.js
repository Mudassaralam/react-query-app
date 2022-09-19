import React from "react";
import { isError, useQuery } from "@tanstack/react-query";
import axios from "axios";
import AddNewPost from "./AddNewPost";

const fetchPosts = async () => {
  try {
    const postData = await axios.get("https://gorest.co.in/public/v1/users/549/posts");
    console.log("post", postData);
    const newData = postData?.data?.data;
    console.log("newData", newData);
    return newData;
  } catch (error) {
    throw Error("Network Fetching Failed");
  }
};
function Home() {
  const { data, isLoading, status } = useQuery(["post"], fetchPosts);

  console.log("data", data, status);

  return (
    <>
      <div className="container pt-5">
        <div className="card">
          <h1>React Query Fetching Data</h1>
            <AddNewPost />
          {isLoading ? (
            <div>Posts are Fetching</div>
          ) : (
            <>
              {data?.map((post, index) => {
                return (
                  <>
                    <div className="card-body" key={index}>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Id {post.user_id}
                      </h6>
                      <h5 className="card-title">Title {post.title} </h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        User Id {post.user_id}
                      </h6>
                      <p className="card-text">content : {post.body}</p>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Home;
