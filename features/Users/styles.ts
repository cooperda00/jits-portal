import styled from "styled-components";
import {
  flex,
  headerHeight,
  spacing,
  fontSize,
  cardRadius,
  cardShadow,
} from "styles";

export const StyledUsersPage = styled.main`
  ${flex("column", "flex-start", "center")};
  height: calc(100vh - ${headerHeight});
`;

export const StyledUserControls = styled.div`
  ${flex("row", "flex-end", "center")};
  width: 100%;
  max-width: 100rem;
  height: 5rem;
  margin-bottom: ${spacing.l};
  font-size: ${fontSize.m};
  padding: ${spacing.l};
  background: white;
  border-radius: ${cardRadius};
  box-shadow: ${cardShadow};
`;

export const StyledUserList = styled.ul`
  width: 100%;
  max-width: 100rem;
`;

export const StyledUserRow = styled.li`
  ${flex("row", "flex-start", "flex-start")};
  width: 100%;
  list-style: none;
  margin-bottom: ${spacing.l};
  font-size: ${fontSize.m};
  padding: ${spacing.l};
  background: white;
  border-radius: ${cardRadius};
  box-shadow: ${cardShadow};

  .name {
    width: 20%;
  }

  .email {
    width: 40%;
  }

  .address {
    ${flex("column", "flex-start", "flex-start")};
    width: 40%;
  }
`;
