
import { useState } from 'react';
import './App.css';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert the form data object to an array
        const formDataArray = Object.values({
            firstName,
            lastName,
            email,
            password,
            gender,
            role
        });
        // Log the array to the console
        console.log(formDataArray);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>CRUD Forms  </h1>
            <div>
                <label> First Name*</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                    required
                />
            </div>

            <div>
                <label> Last Name*</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                    required 
                />
            </div>
            <div>
                <label> Email*</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    required
                />
            </div>
            <div>
                <label>  Password</label>
                <input 
                   type="password"
                   value = {password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="Enter password"
                   required
                   />
            </div>
            <div>
                <label>Gender*</label>
                <input
                    type="radio"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                /> Male
                <input
                    type="radio"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                /> Female
                <input
                    type="radio"
                    value="Other"
                    checked={gender === 'Other'}
                    onChange={(e) => setGender(e.target.value)}
                /> Other
            </div>
            <div>
                <label htmlFor="Role">Select a Role</label>
                <select
                    name="Role"
                    id="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="developer">Developer</option>  
                    <option value="tester">Tester</option>
                    <option value="manager">Manager</option>
                </select>
                <br /><br />
            </div>

            <button type="submit">Add</button>
        </form>
    );
}

export default Form;

