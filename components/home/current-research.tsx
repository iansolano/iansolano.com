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
        src="/assets/images/home-health-care.png"
        alt="User interview with home care workers who are examining wearable devices."
        style={{ objectFit: 'cover' }}
        fill={true}
      />
    </ImageContainer>
    <CopyContent>
      <Title>Empowering Home Care Workers in New York City</Title>
      <>
        <Copy>
          I am currently working as part of a multidisciplinary research team,
          which includes researchers from{' '}
          <CustomLink
            href="https://weill.cornell.edu/"
            target="_blank"
            copy="Weill Cornell Medicine"
          />
          ,{' '}
          <CustomLink
            href="https://cis.cornell.edu/"
            target="_blank"
            copy="Cornell Computing and Information Science"
          />
          ,{' '}
          <CustomLink
            href="https://www.ilr.cornell.edu/"
            target="_blank"
            copy="Cornell University School
            of Industrial and Labor Relations"
          />
          , and{' '}
          <CustomLink
            href="https://www.1199seiu.org/"
            target="_blank"
            copy="1199SEIU United Healthcare Workers East"
          />
          , the nation's largest healthcare union. Our research is focused on
          empowering home care workers (HCWs), who are primarily Black and
          Latina women who care for older adults and enable them to age in
          place.
        </Copy>
        <Copy>
          Despite the growing importance of HCWs, research has shown that they
          are paid low wages, undervalued by other healthcare providers,
          insufficiently trained, operate in isolation, and struggle with their
          own health. In response, our research is focused on creating a data
          cooperative that centers HCWs who are at the crux of the caregiving
          crisis. Our goal is to shift the focus of data collection and
          governance away from monitoring workers, to providing HCWs with the
          agency to control what data is collected and how it will be used to
          advocate for their needs and the needs of their clients.
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
