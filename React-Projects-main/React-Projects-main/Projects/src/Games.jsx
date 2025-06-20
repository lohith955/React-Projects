
import './Games.css'
import { useState } from 'react'
function Games() {
    const [color, setcolor] = useState(false)
    function changetheme() {
        if (color == false) {
            setcolor(true)
        }
        else{
            setcolor(false)
        }

    }
    return (
        <>
            <div className="main">
                <div className="rojects" style={{ backgroundColor:color?'#626F47':"#EAE4D5" }}>
                <div className="ecoration">
                    <h1>Welcome to My Games Hub</h1>
                    <button className="Modes" onClick={()=>changetheme}>Theme</button>
                </div>
                <div className="ro">
                    <div className="mi" onClick={() => { window.location.href = "/Bmicalculator.jsx" }}></div>
                    <div className="esume" onClick={() => { window.location.href = "/Resume.jsx" }}></div>
                    <div className="anbanboard" onClick={() => { window.location.href = "/Kanbanboard.jsx" }}></div>
                    <div className="xpensetr" onClick={() => { window.location.href = "/Expensetracker.jsx" }}></div>
                    <div className="Stop" onClick={() => { window.location.href = "/Stopwatch.jsx" }}></div>
                    <div className="nakeandladder" onClick={() => { window.location.href = "/snakeandladder.jsx" }}></div>
                    <div className="evenupsevendown" onClick={() => { window.location.href = "/sevenupsevendown.jsx" }}></div>
                </div>


            </div>

        </div >
        </>
    )
}
export default Games