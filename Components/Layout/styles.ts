import styled from "styled-components";
import { headerHeight, colors } from "styles";

export const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;

  > main {
    width: 100%;
    height: calc(100vh - ${headerHeight});
    background: ${colors.primary};
    overflow-y: auto;
  }
`;
