import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/actions";



const Form = props => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: "",
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(formState);
        console.log('Smurf Submitted:', formState);
        setFormState({
            name: "",
            age: "",
            height: "",
        });
    };



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
                        placeholder="200"
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
                    <button type="submit">Add Smurf</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        adding: state.adding,
        errors: state.errors,
    };
};

const mapDispatchToProps = { addSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(Form);