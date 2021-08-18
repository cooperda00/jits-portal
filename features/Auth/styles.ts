import styled from "styled-components";
import { spacing, flex, fontSize, headerHeight } from "styles";

export const StyledLoginPage = styled.main`
  ${flex("column", "center", "center")};
  height: calc(100vh - ${headerHeight});
`;

export const StyledSignInButton = styled.button`
  ${flex("row", "center", "center")};
  height: 4rem;
  padding: ${spacing.s} ${spacing.m};
  font-size: ${fontSize.m};
  cursor: pointer;

  img {
    height: 100%;
    padding-right: ${spacing.m};
  }
`;
