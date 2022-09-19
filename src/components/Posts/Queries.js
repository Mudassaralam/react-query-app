import axios from 'axios'
import React from 'react'

export const GetQueries = async ()=>{
    const { data } = await axios.get('http://localhost:3000/posts/');
    return data;
 }
 export const GetSinglePost =  async (id)=>{
    // console.log(id.queryKey[1].id,'id')
    const { data } = await axios.get(`http://localhost:3000/posts/${id.queryKey[1].id}`);
    return data;
 }
