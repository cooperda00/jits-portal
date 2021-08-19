//React
import React, { FC } from "react";
//Styles
import { StyledUserRow } from "./styles";
//Types
import { IUserWithId } from "types";

interface IProps {
  user: IUserWithId;
}

const UserRow: FC<IProps> = ({ user }) => {
  const { name, email, address1, address2, city, county, postcode } = user;

  return (
    <StyledUserRow>
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <div className="address">
        <p>{address1}</p>
        <p>{address2}</p>
        <p>{city}</p>
        <p>{county}</p>
        <p>{postcode}</p>
      </div>
    </StyledUserRow>
  );
};

export default UserRow;
