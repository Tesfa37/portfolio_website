import React from 'react';
import { DiAws, DiTerminal, DiDatabase, DiReact, DiFirebase, DiWindows, DiPython, DiJava, DiJavascript, DiHtml5, DiCss3, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies & Skills</SectionTitle>
    <SectionText>
      I have a broad skill set that spans software development, IT security, system administration, and network management. My experience allows me to contribute effectively across the entire technology stack.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps & Cloud</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS DevOps, Automation Tools, CI/CD Pipelines
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiTerminal size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>System Administration & Scripting</ListTitle>
          <ListParagraph>
            Expertise in <br />
            Microsoft 365, PowerShell, SCCM, Juniper
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End & Databases</ListTitle>
          <ListParagraph>
            Proficient in <br />
            Node.js, various Databases, OnBase by Hyland
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML, CSS, Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming & Languages</ListTitle>
          <ListParagraph>
            Proficient in <br />
            Python, C++, Java, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Network & Security Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Wireless Access Points, Network Expansion, SIEM tools, Incident Response
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>
            Skilled in <br />
            Figma, user-centric interface design
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
