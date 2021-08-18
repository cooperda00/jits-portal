import styled from "styled-components";
import { flex, fontSize, headerHeight, colors } from "styles";

export const StyledNavbar = styled.header`
  ${flex("row", "space-around", "center")};
  height: ${headerHeight};
  width: 100%;
  border-bottom: 0.2rem solid ${colors.primaryDD};
  font-size: ${fontSize.l};
  background: ${colors.primaryD};
`;
