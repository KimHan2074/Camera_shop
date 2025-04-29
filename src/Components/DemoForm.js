import React, { useState } from "react";

function DemoForm() {
    const [name, setName] = useState("");

    const changeInputName = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('You entered: ' + name);
    };

    return (
        <div>
            <h1>Hello {name}</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your name: </label>
                <input
                    type="text"
                    name="name"
                    onChange={changeInputName}
                    value={name}
                />
            </form>
        </div>
    );
}

export default DemoForm;
