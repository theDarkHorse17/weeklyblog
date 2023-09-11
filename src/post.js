import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Stuff from "./stuff";
// import { format } from "path";
import { formatISO9075 } from "date-fns";

export default function  Post(){
    const[posts,setposts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/post').then(response =>{
            response.json().then(posts =>{
                setposts(posts)
            })
        })
    },[])
    // {post.cover}
    return(
    <div id="post" className="post"> 
        {posts.length > 0 && posts.map((post, index) => (
          <div className='entry' key={index}>
            <Link to={`/post/${post.cover}`}>
              <Link to={`/post/${post._id}`}>
                <img src={'http://localhost:4000/'+post.cover}  className="bk" alt="alu"/>
              </Link>
              
            </Link>
            <div className='txt'>
              <Link to={`/post/${post._id}`}>
                <h1 className="custom-h1">{post.title}</h1>
              </Link>
              <p className='info'>
                <a className='author'>{ post.author.user_Name}</a>
                <time>{formatISO9075(new Date(post.createdAt))}</time>
              </p>
              <p className='sum'>{post.summary}</p>
            </div>
          </div>
))}
      
    </div>
    );
}