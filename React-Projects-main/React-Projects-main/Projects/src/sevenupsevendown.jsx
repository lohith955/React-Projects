import face1 from "./assets/face1.png";
import face2 from "./assets/face2.png";
import face3 from "./assets/face3.png";
import face4 from "./assets/face4.png";
import face5 from "./assets/face5.png";
import face6 from "./assets/face6.png";
import { useState } from "react";
import "./sevenupsevendown.css"
import { useEffect } from "react";
import { doc } from "firebase/firestore";
function sevenupsevendown() {
    const [Selecteddiv, setSelecteddiv] = useState('')
    const handlediv = (divid) => {
        setSelecteddiv(divid);
    }
    const [inputbet, setinputbet] = useState(0)
    const inputchange = (event) => {
        setinputbet(parseInt(event.target.value)
        );
    }
    const [img1, setimg1] = useState()
    const [img2, setimg2] = useState()
    const diceimages = {
        1: face1,
        2: face2,
        3: face3,
        4: face4,
        5: face5,
        6: face6
    }
    const [finalresult, setfinalresult] = useState("Roll the Dice")
    const [result, setresult] = useState()
    const [balance, setbalance] = useState(0)
    function rolldice() {
        if (inputbet == 0) {
            alert("Enter the bet Amount")
            return
        }
        if (Selecteddiv == "") {
            alert("Select the choice")
            return
        }
        const n = parseInt(Math.random() * 6) + 1
        const m = parseInt(Math.random() * 6) + 1
        setimg1(diceimages[n])
        setimg2(diceimages[m])
        const sum = n + m
        let outcome
        if (sum < 7) outcome = "seven_down"
        else if (sum > 7) outcome = "seven_up"
        else if (sum == 7) outcome = "seven"
        setresult(outcome);
        if (outcome == "seven" && Selecteddiv == "seven") {
            setfinalresult("seven")
            setbalance(parseInt(balance + (inputbet * 2)))
        }
        else if (outcome== "seven_up" && Selecteddiv == "seven_up") {
            setfinalresult("7 Up")
            setbalance(parseInt(balance + inputbet))

        }
        else if (outcome == "seven_down" && Selecteddiv == "seven_down") {
            setfinalresult("7 Down")
            setbalance(parseInt(balance + inputbet))

        }
        else {
            setfinalresult(`Oops! Try Again Its is incorrect`)
            setbalance(parseInt(balance - inputbet))
        }
        setSelecteddiv("")
    }
    return (
        <>
            <div className="sevenup">
                <div className="container">
                    <div className="choices">
                        {Selecteddiv === "" && (
                            <>
                                <div className="seven_up" onClick={() => handlediv("seven_up")}>7UP</div>
                                <div className="seven" onClick={() => handlediv("seven")}>&emsp;&emsp;7<br />2X Amount</div>
                                <div className="seven_down" onClick={() => handlediv("seven_down")}>7 DOWN</div>
                            </>
                        )}
                        {Selecteddiv === "seven_up" && <div className="seven_up">7UP</div>}
                        {Selecteddiv === "seven" && <div className="seven">&emsp;&emsp;7<br />2X Amount</div>}
                        {Selecteddiv === "seven_down" && <div className="seven_down">7 DOWN</div>}

                    </div>
                </div>
                <div className="betting">
                    <div className="input">
                        <input type="number" className="name" onChange={inputchange} placeholder="Enter Bet Amount" />
                        <button type="submit" onClick={() => rolldice()} >Place the bet</button>
                    </div>
                    <div className="cubes">
                        <img src={img1} alt="" className="image1" />
                        <img src={img2} alt="" className="image2" />
                    </div>
                    <div className="result">
                        <h1>{finalresult}</h1>
                    </div>
                    <div className="return">
                        <h3 align="center" class>
                            Balance:{balance}
                        </h3>
                        <button type="submit" onClick={() => {
                            window.location.href = "./Login"
                        }}>Logout</button>
                    </div>

                </div>
            </div>


        </>
    )
}
export default sevenupsevendown