import styled from "styled-components";
import { flex, headerHeight } from "styles";

export const StyledUsersPage = styled.main`
  ${flex("column", "center", "center")};
  height: calc(100vh - ${headerHeight});
`;
