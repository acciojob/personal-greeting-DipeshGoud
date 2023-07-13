import React, { useState } from "react";

function Input() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    function handleChange(event) {
        setName(event.target.value);
        setGreeting(`Hello ${name}!`);
    }

    return (
        <div>
            <p>Enter your name:</p>
            <form>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
            </form>
            <p>{greeting}</p>
        </div>
    );
}


export default Input;