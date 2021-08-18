import styled from "styled-components";
import { flex, fontSize, headerHeight } from "styles";

export const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;

  header {
    ${flex("row", "space-around", "center")};
    height: ${headerHeight};
    width: 100%;
    border-bottom: 0.1rem solid lightgray;
    font-size: ${fontSize.l};
  }
`;
