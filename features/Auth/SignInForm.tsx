//React
import React, { FC } from "react";
//Styles
import { StyledInputGroup } from "styles/inputs";
import { StyledButton } from "styles";
import { StyledSignInForm } from "./styles";
//Hooks
import { useSignIn } from "./useSignIn";

const SignInForm: FC = () => {
  const { email, password, error, handleChange, handleSubmit } = useSignIn();

  return (
    <StyledSignInForm onSubmit={handleSubmit}>
      <StyledInputGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </StyledInputGroup>

      <StyledInputGroup>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </StyledInputGroup>

      <p className="error">{error}</p>

      <StyledButton type="submit">Sign In</StyledButton>
    </StyledSignInForm>
  );
};

export default SignInForm;
