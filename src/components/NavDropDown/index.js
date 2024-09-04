import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from "react-icons/fa";
import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown';

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#projects">  {/* Ensure correct href */}
      <DropDownIcon>
        <AiFillPhone />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Projects</DropDownItemTitle>
        <DropDownItemDesc>Explore my recent projects</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#technologies">  {/* Ensure correct href */}
      <DropDownIcon>
        <AiOutlineMail />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Technologies</DropDownItemTitle>
        <DropDownItemDesc>Check out the technologies I work with</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#about">  {/* Ensure correct href */}
      <DropDownIcon>
        <FaLocationArrow />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>About</DropDownItemTitle>
        <DropDownItemDesc>Learn more about me</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;
