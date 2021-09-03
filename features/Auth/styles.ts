import styled from "styled-components";
import {
  flex,
  headerHeight,
  cardRadius,
  cardShadow,
  spacing,
  colors,
  fontSize,
} from "styles";

export const StyledLoginPage = styled.main`
  ${flex("column", "center", "center")};
  height: calc(100vh - ${headerHeight});
`;

export const StyledSignInForm = styled.form`
  ${flex("column", "flex-start", "center")};
  padding: ${spacing.l};
  background: white;
  box-shadow: ${cardShadow};
  border-radius: ${cardRadius};
  width: 32rem;

  .error {
    color: ${colors.errorD};
    font-size: ${fontSize.s};
    height: ${fontSize.s};
  }

  button {
    margin-top: ${spacing.l};
  }
`;
