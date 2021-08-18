//React
import React, { useState } from "react";
import { StyledButton } from "styles";
//Styles
import { StyledNewUserForm } from "./styles";

const NewUserForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    county: "",
    postcode: "",
  });

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <StyledNewUserForm onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="personal-details">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleUpdateForm}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className="address">
          <div className="input-group">
            <label htmlFor="address1">Address Line 1</label>
            <input
              type="text"
              name="address1"
              id="address1"
              onChange={handleUpdateForm}
            />
          </div>

          <div className="input-group">
            <label htmlFor="address2">Address Line 2</label>
            <input
              type="text"
              name="address2"
              id="address2"
              onChange={handleUpdateForm}
            />
          </div>

          <div className="input-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleUpdateForm}
            />
          </div>

          <div className="input-group">
            <label htmlFor="county">County</label>
            <input
              type="text"
              name="county"
              id="county"
              onChange={handleUpdateForm}
            />
          </div>

          <div className="input-group">
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              onChange={handleUpdateForm}
            />
          </div>
        </div>
      </div>

      <StyledButton type="submit">Add User</StyledButton>
    </StyledNewUserForm>
  );
};

export default NewUserForm;
