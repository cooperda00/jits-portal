//React
import React, { FC } from "react";
//Styles
import { StyledLayout } from "./styles";
//Components
import Navbar from "./Navbar/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      {children}
    </StyledLayout>
  );
};

export default Layout;
