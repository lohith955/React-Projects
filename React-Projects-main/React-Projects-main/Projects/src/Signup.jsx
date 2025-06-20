import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,db} from "./Firebase";
import { setDoc,doc } from 'firebase/firestore';
import { toast } from "react-toastify";
function Signup(){
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    email:email,
                    firstName:firstName,
                    lastName:lastName,
                    balance:1000
                })
            }
            console.log(user)
            toast.success("User registerd successfully",{
                position:'bottom-center'
            });
        }catch(error){
            console.log(error.message)
            toast.error(error.message,{
                position:'bottom-center'
            });
        }

    }


    return(
        <>
        <div className="signuppage">
            <div className="signup-acrd">
                <h1>Signup</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="fName">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="firtName" id="fname"  placeholder="First Name"
                        value={firstName}
                        onChange={(e)=>setfirstName(e.target.value)}
                        />

                    </div>
                    <div className="lName">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="lastName" id="lname"  placeholder="Last Name"
                        value={lastName}
                        onChange={(e)=>setlastName(e.target.value)}
                        />


                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email"
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        />
                    </div>
                    <div className="btn">
                        <button type="submit">Register</button>
                    </div>
                    <h4>
                    To Login <Link to="/login">Login</Link></h4>
                </form>
            </div>
        </div>
        </>
    )
}
export default Signup;