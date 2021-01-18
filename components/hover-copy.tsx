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

const IMAGE_SIZE = 320;
const ImageContainer = styled.div<ImageContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  max-width: 35%;
  min-width: ${px2rem(IMAGE_SIZE)};
  right: ${({ theme: { spacing } }) => `calc(${spacing[1]} + ${spacing[3]})`};
  width: ${({ theme: { percentages } }) => percentages.full};
  top: ${({ theme: { percentages } }) => percentages.half};
  transform: translateY(-50%);
`;

const ImageContent = styled.figure`
  min-height: ${px2rem(IMAGE_SIZE)};
  position: relative;
  margin: 0;
`;

const Cta = styled.span`
  ${media.sm`
    cursor: url("icons/pointer.svg"), default;
    text-decoration: underline;
    transition: ${({ theme: { transitions } }) => transitions.medium};

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  `}
`;
