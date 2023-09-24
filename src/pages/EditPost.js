import ReactQuill from "react-quill";
import Intro2 from "../intro2";
import 'react-quill/dist/quill.snow.css'
import  { useEffect, useState} from 'react';
import { Navigate, useParams } from "react-router-dom";
import Editor from "../editor";

export default function EditPost(){
    const{id}=useParams();
    const[title,setTitle]=useState(' ')
    const[summary,setsummary]=useState(' ')
    const[content,setcontent]=useState(' ')
    const[files,setfiles]=useState('');
    const[red,setred]=useState(false);


    useEffect(()=>{
        fetch(`http://localhost:4000/post/`+id)
            .then(response=>{
                response.json().then(postInfo=>{
                    setTitle(postInfo.title)
                    setcontent(postInfo.content)
                    setsummary(postInfo.summary)
                })
            })
    })



    async function updatePost(ev){
        const data =new FormData()
        data.set('title',title)
        data.set('summary',summary);
        data.set('content',content)
        data.set('id',id)
        if(files?.[0]){
            data.set('files',files?.[0])
        }
        data.set('files',files?.[0])
        ev.preventDefault();
       const resp = await fetch(`http://localhost:4000/post`,{
            method:'PUT',
            body:data,
            credentials:'include'
        })
        
        if(resp.ok) {
            setred(true);
        }
    }



    if(red) return <Navigate to={'/post/'+id}/>
    return(
        <>
        <Intro2/>
        <form id="cp" onSubmit={updatePost}>
            <input type="file"  id="csf" onChange={ev=>setfiles(ev.target.files)}/>
            <button id="pst"><h3>Update Post</h3></button>

            <input
                type="title"
                id="blk1"
                placeholder="Title" 
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
            />


            <input type="summary" id='blk1' placeholder={"summary"}
               value={summary} 
            onChange={ev=>setsummary(ev.target.value)}
            />
            <Editor onChange={setcontent} value={content}/>

        </form>
        </> 
    )
}