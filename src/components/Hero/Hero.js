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
        Hello, My name is Alok aryal and i am currently studying Bachelor in
        CSIT from ACHS college. I am a front-end web developer. I'm aiming to be
        a full stack developer somewhere in the near future. I definitely do
        love the idea of coding so i want to persue frontend developer as career
        for me.
      </SectionText>
      <Button>
      <a href= "#foot" style={{color:"#f4f4f4"}}>  Learn More </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
