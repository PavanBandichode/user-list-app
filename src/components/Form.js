import React, { useState } from "react";

function Form(props) {
  let {
    setEditFormVisibility,
    isEditFormVisible,
    userData,
    handleSubmit,
    handleFormChange,
  } = props;
  return (
    <section className="form-container">
      <div className="flex space-between">
        <div className="flex-40 ">
          <i className="fa fa-user-plus"></i>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-50">
          <header>User Information</header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="user">Edit Your Note</label>
            <input
              id="user"
              className="input"
              value={userData.name}
              name="name"
              placeholder="Enter user..."
              onChange={handleFormChange}
            />
            <label htmlFor="role">Role</label>
            <select
              name="role"
              value={userData.role}
              onChange={handleFormChange}
            >
              <option value="">select</option>
              <option value="Admin">Admin</option>
              <option value="Owner">Owner</option>
              <option value="Sales">sales</option>
            </select>
            <div className="buttons">
              <button
                className="cancel"
                onClick={() => setEditFormVisibility(false)}
              >
                cancel
              </button>
              <input type="submit" className="add" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
