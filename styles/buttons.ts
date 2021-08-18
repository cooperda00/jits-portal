import styled from "styled-components";
import { colors, flex, fontSize, spacing } from "styles";

export const StyledButton = styled.button`
  ${flex("row", "center", "center")};
  border: none;
  background: ${colors.secondaryL};
  border-radius: 0.5rem;
  padding: ${spacing.m} ${spacing.l};
  font-size: ${fontSize.m};
  cursor: pointer;
  border: 0.1rem solid ${colors.secondary};
  border-bottom: 0.2rem solid ${colors.secondary};
`;
