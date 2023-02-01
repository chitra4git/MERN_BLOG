import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Posts from "../../components/posts/Posts";
import "./home.css";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router"; 

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  const location = useLocation();
  console.log(location)
  //To fetch the data
  useEffect(()=>{
    const fetchPosts = async ()=>{
      //to use api here add proxy in package Json
      const res = await axios.get("/posts"+ search)
      console.log(res)
      setPosts(res.data);

    }
    fetchPosts()
  },[search])
  return (
    <>
      <Header/>
        <div className="home">
          <Posts posts={posts}/>
          <SideBar/>
        </div>
    </>
  )
}
