import ReactQuill from "react-quill";
import Intro2 from "../intro2";
import 'react-quill/dist/quill.snow.css'
import  { useState} from 'react';
import { Navigate } from "react-router-dom";


const modules={
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      
        [{ 'indent': '-1'}, { 'indent': '+1' }],          
        [{ 'direction': 'rtl' }],                         
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['link','image'],
      
        ['clean']                                         
      ]
};

export default function CreatePost(){
    const[title,setTitle]=useState(' ')
    const[summary,setsummary]=useState(' ')
    const[content,setcontent]=useState(' ')
    const[files,setfiles]=useState('');
    const[red,setred]=useState(false);
    

   async function newpost(ev){
        const data =new FormData()
        data.set('title',title)
        data.set('summary',summary);
        data.set('content',content)
        data.set('files',files[0])
        ev.preventDefault();
       
        const r=await fetch('http://localhost:4000/post',{
            method:'POST',
            body:data,
            credentials:'include',
        })
        if(r.ok){
            setred(true)
        }
    }
    if(red) return <Navigate to={'/'}/>
    return(
        <>
        <Intro2/>
        <form id="cp" onSubmit={newpost}>
            <input type="file"  id="csf" onChange={ev=>setfiles(ev.target.files)}/>
            <button id="pst"><h3>Create Post</h3></button>

            <input
                type="title"
                id="blk1"
                placeholder="Title" 
                //value={title}
                onChange={(ev) => setTitle(ev.target.value)}
            />


            <input type="summary" id='blk1' placeholder={"summary"}
              // value={summary} 
            onChange={ev=>setsummary(ev.target.value)}
            />
            
            <div className="editor-container">
                <ReactQuill  
                value={content}
                onChange={newValue =>setcontent(newValue)}
                modules={modules}/>

            </div>
        </form>
        </> 
    )
}