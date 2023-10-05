import { useState } from "react";
import Intro from "../intro";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState(null); // State variable to track errors
    const navigate = useNavigate();

    async function login(ev) {
        try {
            ev.preventDefault();
            const resp = await fetch('http://localhost:4000/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });

            if (resp.ok) {
                navigate('/');
            } else {
                // Handle incorrect credentials here
                setError('Wrong Credentials');
            }
        } catch (error) {
            // Handle any unexpected errors here
            console.error(error);
            setError(<div id="err">
                <p>An error occurred during login.</p>
                <p>Are you sure you are registered?</p>
            </div>);
        }
    }

    return (
        <>
            <Intro />
            <form id="login" onSubmit={login}>
                <h1 id="greets">Reconnect and rejoice, book aficionado! <br /> Our story continues from the point you left.</h1>
                <input id="blk" type="text"
                    placeholder="Email id here"
                    value={email} onChange={ev => setemail(ev.target.value)} />

                <input id="blk" type="password"
                    placeholder="password"
                    value={password} onChange={ev => setpassword(ev.target.value)} />
                <button id="btn1">Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    )
}
