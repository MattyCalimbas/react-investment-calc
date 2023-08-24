import { useState } from 'react';

const initialUserInput = {
    'current-savings': 10000, 
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,  
}

const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();

        props.onCalc(userInput)
    };

    const resetHandler = () => {
        setUserInput(initialUserInput)
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            // special JavaScript syntax where you can dynamically access a property name by wrapping the identifier we want to access with square brackets so you dont set the property named input but rather the property whose name is STORED in input
            return {
                ...prevInput,
                [input]: value,
            }
        })
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)} type="number" id="current-savings" value={userInput['current-savings']} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} type="number" id="yearly-contribution" value={userInput['yearly-contributions']}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)} type="number" id="expected-return" value={userInput['expected-return']}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler('duration', event.target.value)} type="number" id="duration" value={userInput['duration']} />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default UserInput;