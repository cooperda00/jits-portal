//React
import React, { FC } from "react";
//Next
import Link from "next/link";
//Styles
import { StyledIconLink } from "styles";
import { IconType } from "react-icons";

interface IProps {
  href: string;
  Icon: IconType;
  text: string;
}

const IconLink: FC<IProps> = ({ href, Icon, text }) => {
  return (
    <Link href={href} passHref>
      <StyledIconLink>
        <Icon /> {text}
      </StyledIconLink>
    </Link>
  );
};

export default IconLink;
