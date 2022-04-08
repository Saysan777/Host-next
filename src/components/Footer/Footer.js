import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="foot">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call :</LinkTitle>
          <LinkItem> 9808720460</LinkItem>
          <LinkTitle>Email :</LinkTitle>
          <LinkItem> alokaryal32@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating is my way.</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com/Saysan777">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alok-aryal-589a40216/">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/saysan_9/">
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
