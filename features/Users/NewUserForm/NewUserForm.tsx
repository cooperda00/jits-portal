//React
import React from "react";
import { StyledButton } from "styles";
//Styles
import { StyledNewUserForm } from "../styles";
//Hooks
import { useAddNewUser } from "./useAddNewUser";

const NewUserForm = () => {
  const { form, error, handleUpdateForm, handleSubmit } = useAddNewUser();

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
              value={form.name}
            />
            <p className="error">
              {error.key === "name" ? error.message : null}
            </p>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleUpdateForm}
              value={form.email}
            />
            <p className="error">
              {error.key === "email" ? error.message : null}
            </p>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleUpdateForm}
              value={form.password}
            />
            <p className="error">
              {error.key === "password" ? error.message : null}
            </p>
          </div>

          <div className="input-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              onChange={handleUpdateForm}
              value={form.passwordConfirm}
            />
            <p className="error">
              {error.key === "passwordConfirm" ? error.message : null}
            </p>
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
              value={form.address1}
            />
            <p className="error">
              {error.key === "address1" ? error.message : null}
            </p>
          </div>

          <div className="input-group">
            <label htmlFor="address2">Address Line 2</label>
            <input
              type="text"
              name="address2"
              id="address2"
              onChange={handleUpdateForm}
              value={form.address2}
            />
            <p className="error">
              {error.key === "address2" ? error.message : null}
            </p>
          </div>

          <div className="input-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleUpdateForm}
              value={form.city}
            />
            <p className="error">
              {error.key === "city" ? error.message : null}
            </p>
          </div>

          <div className="input-group">
            <label htmlFor="county">County</label>
            <input
              type="text"
              name="county"
              id="county"
              onChange={handleUpdateForm}
              value={form.county}
            />
            <p className="error">
              {error.key === "county" ? error.message : null}
            </p>
          </div>

          <div className="input-group">
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              onChange={handleUpdateForm}
              value={form.postcode}
            />
            <p className="error">
              {error.key === "postcode" ? error.message : null}
            </p>
          </div>
        </div>
      </div>

      <StyledButton type="submit">Add User</StyledButton>
    </StyledNewUserForm>
  );
};

export default NewUserForm;
