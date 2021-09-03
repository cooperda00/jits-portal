import styled from "styled-components";
import { flex, fontSize, spacing } from "styles";

export const StyledInputGroup = styled.div`
  ${flex("column", "flex-start", "flex-start")};
  margin-bottom: ${spacing.m};

  label {
    font-size: ${fontSize.m};
  }

  input {
    font-size: ${fontSize.s};
    padding: ${spacing.s};
  }
`;
