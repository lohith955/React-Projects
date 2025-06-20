import { useState } from "react"
import "./Expensetracker.css"
function Expensetracker() {
    const [budget, setbudget] = useState(null)
    const [totalbudget, settotalbudget] = useState(0)
    const [expenses, setexpenses] = useState('');
    const [amount, setamount] = useState();
    const [listofexpenses, setlistofexpenses] = useState([]);
    const additems = (index) => {
        const newitem = {
            id: Date.now(),
            Exp: expenses,
            Am: amount
        };
        setlistofexpenses([...listofexpenses, newitem])
        updatebudget()
        updateexpenses()
        setexpenses('');
        setamount('');

    }
    const deletelistofexpenses = (id) => {
        setlistofexpenses(listofexpenses.filter(item => item.id !== id));
    }
    const [totalexpenses, settotalexpenses] = useState(0);
    const [budgetleft, setbudgetleft] = useState();
    const updatebudget = () => {
        setbudgetleft(parseInt(parseInt(parseInt(totalbudget) - amount)))
    }
    const updateexpenses = () => {
        settotalexpenses(parseInt(parseInt(totalexpenses) + parseInt(amount)))
    }
    return (
        <>
            <div className="maincontainer">
                <div className="expensetracker">
                    <div className="addbudget">
                        <h3>Add Budget:</h3>
                        <label htmlFor="budget">Budget</label><br></br>
                        <input type="number" className="budget" id="budget" value={parseInt(budget)} onChange={(e) => {
                            setbudget(e.target.value)
                        }} /><br></br>
                        <button onClick={() => settotalbudget(budget)}>Add Budget</button>

                    </div>
                    <div className="expenses">
                        <h3>Add Expenses</h3>
                        <label htmlFor="Expenses">Expenses Title:</label><br></br>
                        <input type="text" className="Expenses" id="Expenses" value={String(expenses)} onChange={(e) => setexpenses(e.target.value)} /><br></br>
                        <label htmlFor="Amount">Amount:</label><br></br>
                        <input type="text" className="Amount" id="mount" value={amount} onChange={(e) => {
                            setamount(e.target.value)
                        }} /><br></br>
                        <button onClick={additems}>Add Expenses</button>
                    </div>
                    <div className="expenses">
                        <div className="details">
                            <h3>Total Budget: &emsp;{totalbudget}</h3>
                            <h3>Total Expenses: {totalexpenses}</h3>
                            <h3>Budget Left: {budgetleft}</h3>
                        </div>
                        <div className="urexpenses">
                            <ul className="Expenses">
                                <li><h4>Name</h4><h4>Amount</h4> <h4>Action</h4></li>
                                {listofexpenses.map(e => (
                                    <ul className="products" key={e.id}>
                                        <li>{e.Exp}</li><li>{e.Am}</li>
                                        <li><button onClick={() => deletelistofexpenses(e.id)}>Delete</button></li>

                                    </ul>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Expensetracker