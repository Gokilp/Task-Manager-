import React, { useState } from "react";
import './DashBoard.css';
import Form from "./Form";

function Dashboard() {
  const [data, setData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // State to track editing user

  // Function to handle adding or updating a user
  const handleAddUser = (newUser) => {
    if (editingUser) {
      // Update existing user
      const updatedData = data.map(item =>
        item.id === editingUser.id ? { ...newUser, id: editingUser.id } : item
      );
      setData(updatedData);
      setEditingUser(null);
    } else {
      // Add new user
      setData([...data, newUser]);
    }
    setIsFormVisible(false);
  };

  // Edit handler
  const handleEdit = (id) => {
    const userToEdit = data.find(item => item.id === id);
    setEditingUser(userToEdit);
    setIsFormVisible(true);
  };

  // Delete handler
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete the item "${name}"?`)) {
      const updatedList = data.filter(item => item.id !== id);
      setData(updatedList);
    }
  };

  // Handler to show the form
  const handleAdd = () => {
    setEditingUser(null); // Reset editing user when adding a new one
    setIsFormVisible(true);
  };

  // Handler to cancel form submission
  const handleFormCancel = () => {
    setIsFormVisible(false);
    setEditingUser(null);
  };

  return (
    <div className="Userdata">
      {isFormVisible ? (
        <Form
          onSubmit={handleAddUser}
          onCancel={handleFormCancel}
          editingUser={editingUser} // Pass editingUser to form
        />
      ) : (
        <>
          {data.length === 0 ? (
            <p>No records found. Please add data.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                      <button className="btn-edit" onClick={() => handleEdit(item.id)}>Edit</button>
                      <br/>
                      <button className="btn-delete" onClick={() => handleDelete(item.id, item.firstName)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <br />

          <button className="Add" onClick={handleAdd}>Add</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;

