
import React, { useContext, useEffect, useState } from "react";
import Intro2 from "../intro2";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import {UserContext} from "../UserContext.js"
import { Link } from "react-router-dom";

export default function PostPage() {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const [user,setuser]=useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => response.json())
            .then(data => {
                setPostInfo(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
          credentials: 'include',
        })
          .then((response) => {
            return response.json();
          })
          .then((userInfo) => {
            setuser(userInfo);
          });
      }, []);
    

    if (!postInfo) return 'Loading...';

    return (
        <div id="div">
            <Intro2 />
            <div id="pp" className="post-page">
                <h1 id="ttl">{postInfo.title}</h1>
                <time id="tm">{formatISO9075(new Date(postInfo.createdAt))}</time>
                <h2 id="bb">by {postInfo.author.user_Name}</h2>
                {user.id===postInfo.author._id && (
                    <div id="ed">
                    <Link  id='bt' to={`/edit/${postInfo._id}`}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/></svg>
                        
                        Edit Blog
                    </Link>
                    </div>
                )}
                <div className="image">
                    <img src={`http://localhost:4000/${postInfo.cover}`} id="image" alt="" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </div>
        </div>
    );
}
