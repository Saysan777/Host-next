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
        Hello, My name is <strong>Alok aryal</strong> and i completed my Bachelors in
        CSIT from ACHS college. I'm currently working as a full-stack software developer in <a href="https://www.keela.co/about-us" style={{ text-decoration: none }}> Keela </a>. I definitely do
        love the idea of coding so have been crafting and managing initutaive web applications.
      </SectionText>
      <Button>
      <a href= "#foot" style={{color:"#f4f4f4"}}>  Learn More </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
