
import React, { useEffect, useState } from "react";
import Intro from "../intro2";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function PostPage() {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    
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
    

    if (!postInfo) return 'Loading...';

    return (
        <div id="div">
            <Intro />
            <div id="pp" className="post-page">
                <h1>{postInfo.title}</h1>
                <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
                <h2>{postInfo.author._id}</h2>
                <h2>{postInfo.author.user_Name}</h2>
                <div className="image">
                    <img src={`http://localhost:4000/${postInfo.cover}`} id="image" alt="" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </div>
        </div>
    );
}
