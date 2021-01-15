import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { px2rem, media } from '../styles/style-utils';

type HoverCopyProps = {
  copy: string;
  src: string;
  alt: string;
};

const HoverCopy = ({ copy, src, alt }: HoverCopyProps) => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <>
      <Cta
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        {copy}
      </Cta>
      <ImageContainer isVisible={isVisible}>
        <ImageContent>
          <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </ImageContent>
      </ImageContainer>
    </>
  );
};

export default HoverCopy;

type ImageContainerProps = {
  isVisible: boolean;
};

const ImageContainer = styled.div<ImageContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  max-width: 35%;
  min-width: ${px2rem(320)};
  right: 0;
  width: ${({ theme: { percentages } }) => percentages.full};
  top: ${({ theme: { percentages } }) => percentages.half};
  transform: translate(-${({ theme: { spacing } }) => spacing[4]}, -50%);
  z-index: ${({ theme: { zIndex } }) => zIndex[1]};
`;

const ImageContent = styled.div`
  position: relative;
  height: 100vh;
`;

const Cta = styled.span`
  ${media.sm`
    cursor: pointer;
    text-decoration: underline;
    transition: ${({ theme: { transitions } }) => transitions.medium};

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  `}
`;
