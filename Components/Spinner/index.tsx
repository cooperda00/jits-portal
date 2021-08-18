//React
import React, { FC } from "react";
//Styles
import { StyledSpinner } from "./styles";

interface IProps {
  show: boolean;
}

const Spinner: FC<IProps> = ({ show }) =>
  show === true ? <StyledSpinner /> : null;

export default Spinner;
