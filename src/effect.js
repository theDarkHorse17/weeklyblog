import stars from './img/stars.png';
import moon from './img/moon.png';
import mbehind from './img/mountains_behind.png';
import mfront from './img/mountains_front.png';


export default function Effect(){
    return(
    <section>
       <img src={stars} alt="" id="stars"/> 
       <img src={moon} alt="" id="moon"/>
       <img src={mbehind} alt="" id="mbehind"/>
       <img src={mfront} alt="" id="mfront"/>
       <h2 id="text">Holá Amigos</h2>
       <a href="#about" className="btn" id="btn">Explore</a>
    </section>
    )
}