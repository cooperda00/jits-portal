//React
import React, { FC } from "react";
//Styles
import { StyledUserRow } from "./styles";

interface IProps {
  user: Faker.Card;
}

const UserRow: FC<IProps> = ({ user }) => {
  const { name, email, address } = user;
  const { streetB, streetC, city, state, zipcode } = address;

  return (
    <StyledUserRow>
      <p className="name">{name}</p>
      <p className="email">{email}</p>
      <div className="address">
        <p>{streetB}</p>
        <p>{streetC}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{zipcode}</p>
      </div>
    </StyledUserRow>
  );
};

export default UserRow;
