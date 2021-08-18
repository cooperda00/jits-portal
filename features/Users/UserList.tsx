//React
import React, { FC } from "react";
//Types
import { IUsersData } from "types";
//Styles
import { StyledUserList } from "./styles";
//Components
import UserRow from "./UserRow";

interface IProps {
  users: IUsersData | null;
}

const UserList: FC<IProps> = ({ users }) => {
  return (
    <StyledUserList>
      {users
        ? users.users.map((user, i) => <UserRow key={i} user={user} />)
        : null}
    </StyledUserList>
  );
};

export default UserList;
