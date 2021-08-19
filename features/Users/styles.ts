import styled from "styled-components";
import {
  flex,
  headerHeight,
  spacing,
  fontSize,
  cardRadius,
  cardShadow,
  colors,
  grays,
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

export const StyledNewUserForm = styled.form`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  max-width: 100rem;
  font-size: ${fontSize.m};
  padding: ${spacing.l};
  background: white;
  border-radius: ${cardRadius};
  box-shadow: ${cardShadow};

  .input-group {
    ${flex("column", "flex-start", "flex-start")};
    margin-bottom: ${spacing.m};
    width: 80%;

    > .error {
      height: ${fontSize.s};
      font-size: ${fontSize.s};
      color: ${colors.errorD};
      width: 100%;
    }

    > input {
      width: 100%;
      padding: ${spacing.m};
      border: 0.1rem solid ${grays.light};
      border-bottom: 0.2rem solid ${colors.secondary};
    }
  }

  .inputs {
    ${flex("row", "flex-start", "flex-start")};
    width: 100%;
    margin-bottom: ${spacing.l};

    > div {
      ${flex("column", "flex-start", "center")};
      width: 50%;
    }
  }
`;
