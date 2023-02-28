import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";



const Hero = () => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To My Personal Portfolio  
      </SectionTitle>
      <SectionText>
        Hello, My name is <strong>Alok aryal </strong> 
        and i completed my Bachelors in CSIT from <a href="https://achsnepal.edu.np/about-college/" style={{ textDecoration: 'none', color:'cyan' }} target="_blank" > ACHS </a> college. I'm currently working as a full-stack software developer in 
        <a href="https://www.keela.co/about-us" style={{ textDecoration: 'none', color:'cyan'}} target="_blank" > Keela </a>.
        I definitely do love the idea of coding so have been crafting and managing intuitive web applications.
      </SectionText>
      <Button>
      <a href= "#foot" style={{color:"#f4f4f4"}}>  Learn More </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
