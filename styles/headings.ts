import styled from "styled-components";
import { spacedTitle, fontSize, spacing } from "styles";

export const StyledPageHeading = styled.h1`
  ${spacedTitle()};
  font-size: ${fontSize.xxl};
  margin: ${spacing.l} 0;
`;
