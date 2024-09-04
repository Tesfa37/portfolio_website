import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />My Digital Space
        </SectionTitle>
        <SectionText>
          Hello! I'm Tesfatsion Desta,<br /> IT professional with experience in system administration, IT security, and software development.
        </SectionText>
        <a href="#projects" style={{ textDecoration: 'none' }}>
          <Button onClick={props.handleClick}>Explore My Work</Button>
        </a>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
