import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import CustomLink from '../custom-link';
import SecondaryType from '../secondary-type';
import { px2rem, media } from '../../styles/style-utils';

const CurrentResearch = () => (
  <Container>
    <SecondaryType>Current Research</SecondaryType>
    <ImageContainer>
      <Image
        src="/assets/images/current-research.png"
        alt="Interactive focus group with home care workers who are using smart glasses for hands-free wound care."
        style={{ objectFit: 'cover' }}
        fill={true}
        sizes="1280px"
      />
    </ImageContainer>
    <CopyContent>
      <Title>Digital Health Equity in Home Healthcare Work</Title>
      <>
        <Copy>
          I am part of a multidisciplinary research team at Cornell University
          working on the{' '}
          <CustomLink
            href="https://www.ilr.cornell.edu/carow/incubator/home-care-work"
            target="_blank"
            copy="Initiative on Home Care Work"
          />
          . Our goal is to elevate the value of home care workers while
          improving their working conditions and patient outcomes.
        </Copy>
        <Copy>
          My current research focuses on the responsible design, development,
          and deployment of AI agents to improve care coordination between
          informal caregivers, home healthcare workers, and healthcare
          providers.
        </Copy>
      </>
    </CopyContent>
  </Container>
);

export default CurrentResearch;

const Container = styled.section`
  border-top: ${({ theme: { borderWidths, colors } }) =>
    `${borderWidths[1]} solid ${colors.primaryLighten}`};
  padding-top: ${({ theme: { spacing } }) => spacing[3]};
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  height: ${px2rem(450)};
  margin: ${({ theme: { spacing } }) => `${spacing[3]} 0`};
  position: relative;
  width: 100%;

  ${media.md`
    height: ${px2rem(650)};
  `}
`;

const CopyContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  ${media.md`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `}
`;

const Title = styled.h2`
  display: block;
  flex: 0 0 100%;
  font-size: ${({ theme: { spacing } }) => spacing[3]};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights[0]};
  margin: ${({ theme: { spacing } }) => `0 0 ${spacing[2]} 0`};

  ${media.md`
    flex: 1 1 0;
    margin: 0;
  `}
`;

const Copy = styled.p`
  display: block;
  flex: 0 0 100%;
  font-size: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[2]})`};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};

  ${media.md`
    flex: 1 1 0;
    margin: ${({ theme: { spacing } }) => `0 0 ${spacing[3]} ${spacing[2]}`};
  `}
`;
