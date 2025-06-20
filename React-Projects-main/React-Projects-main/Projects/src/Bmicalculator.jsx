import React from "react"
import { useState } from "react";
import './Bmicalculator.css'
function Bmicalculator() {
    const [weight, setweight] = useState();
    const [Height, setHeight] = useState();
    const [result, setresult] = useState(0.0);
    const [Gender, setGender] = useState('');
    const [condition, setcondition] = useState('');
    const [rolling, setrolling] = useState(0);
    function calculatebmi() {
        if (Height == 0 || weight == 0) {
            setresult("Not valid Input")
        }
        else {
            const bmi = (parseInt(weight / ((Height / 100) ** 2)))
            setresult(bmi)
            if (bmi <= 18.5) setcondition("UnderWeight");
            else if (bmi <= 25 && bmi > 18.5) setcondition("Normal");
            else if (bmi <= 30 && bmi > 25) setcondition("Over Weight");
            else setcondition("Odesity");
            setresult(bmi.toFixed(2))
        }
    }

    return (
        <>
            <div className="bmi">
                <div className="Heading">
                    <h1>BODY MASS INDEX CALCULATOR./</h1>
                </div>
                <div className="Matter">
                    <h4>With our easy-touse BMI calculator,you can quickly determine your body mass index and get insights into your body fat and potential health risks</h4>
                </div>
                <div className="Measures">

                    "
                    <h3>Your Body Measurements./</h3>
                    <h4>Gender</h4>
                    <div className="gender">
                        <button className="Male" onClick={() => { setGender("Male") }} >Male</button>
                        <button className="Female" onClick={() => { setGender("Female") }}>Female</button>
                        <button className="Other" onClick={() => { setGender("Other") }}>Other</button>
                    </div>
                    <div className="inputs">
                        <label htmlFor="Weight">Weight</label><br></br>
                        <input type="text" name="weight" id="weight" value={weight} onChange={(e) => setweight(e.target.value)} placeholder="Enter Weight" /><br></br>
                        <label htmlFor="Height">Height</label><br></br>
                        <input type="text" name="Height" id="Height" value={Height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter Height" />
                    </div>
                    <button className="calculate" type="submit" onClick={calculatebmi} >Calculate</button>

                </div>
                <div className="resul">
                    <h2>Body Mass Index./</h2>
                    <div className="res">
                        <p className="re" style={{transtion:"10s ease-in-out"}}>{result}</p>
                    </div>
                    <div className="one">
                        <h4>Please,enter information about weight and height and we will calculate your BMI</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bmicalculator