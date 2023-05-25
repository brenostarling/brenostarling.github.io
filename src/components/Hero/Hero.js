import React from 'react';
import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          I'm Breno Starling, a Fullstack Developer from Betim, MG - Brazil with over two years of experience in Fullstack development. I have expertise in Asterisk, SIP phone system, and WebRTC. Currently, I am proficient in developing frontend applications using React, Vue2, Vue3, and AngularJS, while utilizing Node.js for backend development.
        </SectionText>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button onClick={() => window.open('/files/resume.pdf', '_blank')}>
            My Resume
          </Button>

          <Button onClick={() => window.open('/files/resume_pt.pdf', '_blank')}>
            Meu Currículo
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
