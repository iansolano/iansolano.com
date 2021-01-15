import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { px2rem, media } from '../styles/style-utils';

const Header = () => (
  <Container>
    <ImageContainer>
      <Image
        src="/assets/headshot.png"
        alt="Headshot of Ian Solano-Kamaiko"
        layout="fill"
        objectFit="contain"
      />
    </ImageContainer>
    <Items>
      <Item>Ian René Solano-Kamaiko</Item>
      <Item>él/he/him</Item>
    </Items>
  </Container>
);

export default Header;

const Container = styled.header`
  align-items: center;
  border-bottom: ${({ theme: { borderWidths, colors } }) =>
    `${borderWidths[1]} solid ${colors.black}`};
  display: flex;
  height: ${px2rem(100)};
  margin-bottom: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[3]})`};
  padding: ${({ theme: { spacing } }) => `0 ${spacing[2]}`};

  ${media.md`
    padding: ${({ theme: { spacing } }) =>
      `0 calc(${spacing[1]} + ${spacing[3]})`};
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  height: ${px2rem(60)};
  position: relative;
  width: ${px2rem(60)};
`;

const Items = styled.div`
  margin-left: ${({ theme: { spacing } }) => spacing[3]};
`;

const Item = styled.span`
  display: block;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  font-size: ${px2rem(14)};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[2]};
  text-transform: uppercase;
`;
