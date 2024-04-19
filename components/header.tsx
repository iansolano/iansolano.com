import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import styled from 'styled-components';

import Wrapper from './wrapper';
import SecondaryType from './secondary-type';
import { px2rem, media } from '../styles/style-utils';

const Header = () => (
  <Container>
    <ImageContainer>
      <Image
        src="/assets/images/headshot.jpg"
        alt="Headshot of Ian Solano-Kamaiko"
        style={{ objectFit: 'cover' }}
        fill={true}
        sizes="120px"
      />
    </ImageContainer>
    <div>
      <Spacer>
        <SecondaryType>Ian René Solano-Kamaiko</SecondaryType>
        <SecondaryType>él/he/him 🇵🇷</SecondaryType>
      </Spacer>
      <Spacer>
        <SecondaryType>Cornell Tech</SecondaryType>
        <SecondaryType>2 West Loop Rd</SecondaryType>
        <SecondaryType>New York, NY 10044</SecondaryType>
      </Spacer>
      <SecondaryType>irs24 [at] cornell.edu</SecondaryType>
    </div>
    <Navigation>
      <Anchor href="/">Home</Anchor>
      <Anchor href="/publications">Publications</Anchor>
      <Anchor
        target="_blank"
        href="/assets/documents/Ian-Rene-Solano-Kamaiko-CV.pdf"
      >
        CV
      </Anchor>
    </Navigation>
  </Container>
);

export default Header;

const Container = styled(Wrapper)`
  display: flex;
  && {
    margin-top: ${({ theme: { spacing } }) => spacing[3]};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: ${px2rem(150)};
  margin-right: ${({ theme: { spacing } }) => spacing[2]};
  position: relative;
  width: ${px2rem(120)};
`;

const Spacer = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
`;

const Navigation = styled.div`
  display: none;

  ${media.md`
    display: block;
    margin-left: auto;
  `}
`;

const Anchor = styled(Link)`
  color: ${({ theme: { colors } }) => colors.primary};
  cursor: url('icons/pointer.svg'), pointer;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  font-size: ${({ theme: { spacing } }) => spacing[2]};
  padding-left: ${({ theme: { spacing } }) => spacing[3]};
  text-decoration: none;
  text-transform: uppercase;
  transition: ${({ theme: { transitions } }) => transitions.medium};

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }

  ${media.md`
    font-size: ${px2rem(14)};
  `}
`;
