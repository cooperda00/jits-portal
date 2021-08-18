import styled from "styled-components";
import { spacing, flex, headerHeight, StyledButton } from "styles";

export const StyledLoginPage = styled.main`
  ${flex("column", "center", "center")};
  height: calc(100vh - ${headerHeight});
`;

export const StyledSignInButton = styled(StyledButton)`
  img {
    height: 4rem;
    padding-right: ${spacing.m};
  }
`;
