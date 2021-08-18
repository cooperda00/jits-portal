//Styles
import { css } from "styled-components";
import { colors } from "./variables";

export const flex = (
  direction = "row",
  justify = "flex-start",
  align = "flex-start"
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export const spacedTitle = (fontSize = "2rem") => {
  return css`
    letter-spacing: 0.2rem;
    font-weight: 500;
    font-size: ${fontSize};
  `;
};

export const rotate = (degrees = 360) => {
  return css`
    transform: rotate(${degrees}deg);
  `;
};

// export const font = (str: "title" | "body" = "body") => {
//   if (str === "title") {
//     return css`
//       font-family: "IBM Plex Sans", monospace;
//     `;
//   } else {
//     return css`
//       font-family: "Decima Mono X", monospace;
//     `;
//   }
// };

export const scrollbarOff = () => {
  return css`
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  `;
};

export const replaceOutline = () => {
  return css`
    outline: none;
    &:focus {
      box-shadow: 0 0 0.2rem 0.1rem ${colors.primaryD};
    }
  `;
};
