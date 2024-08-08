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
          Hello! I'm Tesfatsion Desta, a dedicated and innovative software developer with a passion for crafting beautiful and functional web applications. With expertise in modern web development technologies, I aim to deliver exceptional digital experiences. Dive into my portfolio to discover my journey, projects, and the skills I've honed over the years.
        </SectionText>
        <a href="#projects" style={{ textDecoration: 'none' }}>
          <Button onClick={props.handleClick}>Explore My Work</Button>
        </a>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
