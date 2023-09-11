import { useState } from "react";
import Intro from "../intro";


export default function Register(){
    const [First_Name,setFirst_Name]=useState('');
    const [Last_Name,setLast_Name]=useState('');
    const [user_Name,setuser_Name]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');

    async function register(ev){
        try{
         ev.preventDefault();
            await fetch('http://localhost:4000/register',{
                method:'POST',
                body: JSON.stringify({First_Name,Last_Name,user_Name,email,password}),
                headers: {'Content-Type':'application/json'},
              
            });
            alert('registration successful')
            window.location.href='http://localhost:3000/login'
        }
        catch{
            alert('Email id already taken')
        } 
        
        
    }

    return(
        <>
         <Intro/>
         
        <form id="login" onSubmit={register}>
            <h1 id="greets">Unlock a World of Possibilities: <br/> Register and Explore with Us</h1>
            <input id="blk" type="text" placeholder="First Name" value={First_Name}
             onChange={ev=>setFirst_Name(ev.target.value)}/>

            <input id="blk" type="text" placeholder="Last Name" value={Last_Name}
             onChange={ev=>setLast_Name(ev.target.value)}/>

            <input id="blk" type="text" placeholder="Username" value={user_Name}
            onChange={ev=>setuser_Name(ev.target.value)}/>

            <input id="blk" type="text" placeholder="email id:123qwe2gmail.com" value={email} 
            onChange={(ev)=>setemail(ev.target.value)}/>

            <input id="blk" type="password" placeholder="password" value={password} 
            onChange={ev=>setpassword(ev.target.value)}/>

            <button id="btn1">Register</button>
        </form>
        {/* <button >Submit</button> */}
        </>
        
    )
}