import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth} from "./Firebase";
import Games from "./Games";
function Login1() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit= (e)=>{
        e.preventDefault()
        auth.onAuthStateChanged(async(user)=>{
            await signInWithEmailAndPassword(auth, email ,password)
            window.location.href="/Games"
            if(user){
                console.log(user)
                console.log("user logged succesfully")
                toast.success("user logged in succesfully",{
                    position:"top-right"
                 })
            }

        })
        console.log(email, password)
    }
    return (
        <>
            <div className="login-page">
                <div className="login-card">
                    <h1>Login</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="Email" name="email" id="email" placeholder="Enter Your Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="Password" name="password" id="password" placeholder="Enter Your Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="btn">
                            <button type="submit">Submit</button>
                        </div>
                        <h4>
                            New User: <Link to="/sign-up">Register now</Link>
                        </h4>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Login1;