import { useState } from "react";
import Intro from "../intro";
import { useNavigate } from "react-router-dom";


    export default function Login(){
        const [email,setemail]=useState('');
        const [password,setpassword]=useState('');
        var setred=false;
        const navigate=useNavigate();
        
        async function login(ev){
        try
           { 
            ev.preventDefault();
           const resp=await fetch('http://localhost:4000/login',{
                method:'POST',
                body:JSON.stringify({email,password}),
                headers:{'Content-Type':'application/json'},
                credentials:'include',
            });
            console.log(resp.ok);
            if(resp.ok){
               setred=resp.ok;   
            }else{
                alert('Wrong Credentials')
            }
            if(setred){
            
            navigate('/')
            }
           }
        catch{
           
        }
        }
        return(
            <>
            <Intro/>
            
            <form id="login"  onSubmit={login}>
            <h1 id="greets">Reconnect and rejoice, book aficionado! <br/> Our story continues from the point you left.</h1>
            <input id="blk" type="text" 
            placeholder="Email id here" 
            value={email} onChange={ev =>setemail(ev.target.value)}/>

            <input id="blk" type="password" 
            placeholder="password"
            value={password} onChange={ev =>setpassword(ev.target.value)}/>
            <button id="btn1">Login</button>
        </form>
            </>
            
        )
    }