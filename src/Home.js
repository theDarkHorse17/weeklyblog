import React  from "react";
import Effect from './effect';
import Post from './post';
import About from './about';
import Contact from './contact';
import Matha from './Header';
import './App.css'

export default function  Home(){
    return(
        <body>
            <Matha/>
            <Effect/>
            <About/>
            <Post/>
            <Contact/>
        </body>
    )
}