import React, { useState, useEffect } from 'react';
import './Form.css';

function Form({ onSubmit, onCancel, editingUser }) {
  // State hooks for form fields
  const [formState, setFormState] = useState({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    role: ''
  });

  // Effect to populate form fields with editing user data
  useEffect(() => {
    if (editingUser) {
      setFormState(editingUser);
    }
  }, [editingUser]);

  // Change handler for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass formData to the parent component
    onSubmit(formState);

    // Reset form fields
    setFormState({
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      role: ''
    });
  };

  // Destructure form fields from state for easy access
  const { firstName, lastName, email, password, gender, role } = formState;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{editingUser ? "Edit User" : "Add User"}</h1>

        <div>
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />
        </div>

        <div>
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />
        </div>

        <div>
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        <div>
          <label>Gender*</label>
          <div>
            {['Male', 'Female', 'Other'].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={gender === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="role">Select a Role</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={handleChange}
            required
          >
            <option value="">Select a role</option>
            <option value="developer">Developer</option>
            <option value="tester">Tester</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <div>
          <button type="submit">{editingUser ? "Update" : "Add"}</button>
          <br />
          <br />
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
