import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'AWS Certified DevOps Engineer Professional '},
  { text: 'CompTIA Cybersecurity Analyst (CySA+)' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

  </Section>
);

export default Acomplishments;
