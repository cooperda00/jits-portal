//React
import React from "react";
//Styles
import { StyledUserControls } from "./styles";
//Icons
import { MdPersonAdd } from "react-icons/md";
//Components
import IconLink from "Components/Links/IconLink";

const UserControls = () => {
  return (
    <StyledUserControls>
      <IconLink href="/users/new" text="Add New User" Icon={MdPersonAdd} />
    </StyledUserControls>
  );
};

export default UserControls;
