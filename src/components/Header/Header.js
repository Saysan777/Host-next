
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <head>
      <meta http-equiv="refresh" content="5; URL=https://host-next-o2n7he4o2-saysan777.vercel.app/" />
      </head>
      <div href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        ></a>
        <span>
          Portfolio <DiCssdeck />{" "}
        </span>
      </div>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects"> Projects </NavLink>
      </li>
      <li>
        <NavLink href="#tech"> Technology </NavLink>
      </li>
      <li>
        <NavLink href="#about"> About </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Saysan777">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alok-aryal-589a40216/">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/saysan_9/">
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
