//React
import React from "react";
//Toast
import { Toaster as HotToaster } from "react-hot-toast";
//Icons
import { MdError, MdDone } from "react-icons/md";
//Styles
import { colors } from "styles";

const Toaster = () => {
  return (
    <HotToaster
      position="bottom-left"
      toastOptions={{
        error: {
          icon: <MdError />,
          style: {
            background: colors.errorL,
            borderBottom: `0.2rem solid ${colors.errorD}`,
            color: "white",
            fontSize: "1.6rem",
            fontWeight: "normal",
          },
        },
        success: {
          icon: <MdDone />,
          style: {
            background: colors.success,
            borderBottom: `0.2rem solid ${colors.successD}`,
            color: "white",
            fontSize: "1.6rem",
            fontWeight: "normal",
          },
        },
      }}
    />
  );
};

export default Toaster;
