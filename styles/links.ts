import styled from "styled-components";
import { fontSize, flex, spacing } from "styles";

export const StyledIconLink = styled.a`
  ${flex("row", "flex-start", "center")};
  cursor: pointer;
  font-size: ${fontSize.m};

  > svg {
    margin-right: ${spacing.s};
  }
`;
