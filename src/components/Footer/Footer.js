import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://wa.me/+5531997746798" target="_blank">
            Whatsapp
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:brenostarling1@hotmail.com">brenostarling1@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Copyright &copy; 2023{' '}
            <Link href="https://github.com/brenostarling" target="_blank">
              {' '}
              Breno Starling
            </Link>
            . All rights reserved.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/brenostarling" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/brenoishy" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/brenostarling" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.me/+5531997746798" target="_blank">
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
