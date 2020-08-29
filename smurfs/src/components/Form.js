import React, { useState } from "react";

const defaultFormState = {
    name: '',
    age: '',
    height: ''
}

const Form = () => {
    const [formState, setFormState] = useState(defaultFormState);
    

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Smurf Submitted:', formState);
    }
        const handleChange = e => {
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            })
        }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Papa"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label >Age</label>
                    <input
                        name="age"
                        placeholder="18"
                        value={formState.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label >Height</label>
                    <input
                        name="height"
                        placeholder="5cm"
                        value={formState.height}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;