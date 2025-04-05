import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import CustomLink from '../custom-link';
import SecondaryType from '../secondary-type';
import { px2rem, media } from '../../styles/style-utils';

const RecentPublications = () => (
  <Container>
    <SecondaryType>Recent Publications</SecondaryType>
    <ContentWrapper>
      <ContentCard>
        <ImageContainer>
          <Image
            src="/assets/images/activity-tracker.png"
            alt="An image of a home care worker interacting with an activity tracker wristband."
            style={{ objectFit: 'cover' }}
            fill={true}
            sizes="640px"
          />
        </ImageContainer>
        <CopyContent>
          <Content>
            <CustomLink
              href="/assets/documents/Activity-Tracking-For-HCWs-CSCW25.pdf"
              copy="“This is eye opening:” Raising Awareness of Home Care Workers' Health and Wellbeing via Activity Tracking"
              target="_blank"
              hasArrow={true}
            />
            <CopyContainer>
              <Copy>
                <Emphasis>Ian René Solano-Kamaiko</Emphasis>, Melissa Tan, Irene
                Yang, Kexin Cheng, Ronica Peramsetty Michelle Shum, Yanira
                Escamilla, Ariel C. Avgar, Madeline Sterling, Aditya Vashistha,
                Nicola Dell.{' '}
                <i>
                  Proceedings of the 2025 ACM Conference on Computer-Supported
                  Cooperative Work and Social Computing (CSCW '25)
                </i>
                .
              </Copy>
            </CopyContainer>
          </Content>
        </CopyContent>
      </ContentCard>
      <ContentCard>
        <ImageContainer>
          <Image
            src="/assets/images/hcw-phone.png"
            alt="An image of a home care worker looking over a patient's shoulder at their phone."
            style={{ objectFit: 'cover' }}
            fill={true}
            sizes="640px"
          />
        </ImageContainer>
        <CopyContent>
          <Content>
            <CustomLink
              href="/assets/documents/AI-In-HCW-CHI25.pdf"
              copy="“Who is running it?” Towards Equitable AI Deployment in Home Care Work"
              target="_blank"
              hasArrow={true}
            />
            <CopyContainer>
              <Copy>
                <Emphasis>Ian René Solano-Kamaiko</Emphasis>, Melissa Tan, Joy
                Ming, Ariel C. Avgar, Aditya Vashistha, Madeline Sterling,
                Nicola Dell.{' '}
                <i>
                  Proceedings of the 2025 ACM Conference on Human Factors in
                  Computing Systems (CHI '25)
                </i>
                .
              </Copy>
            </CopyContainer>
          </Content>
        </CopyContent>
      </ContentCard>
    </ContentWrapper>
    <Anchor href="/publications">View All</Anchor>
  </Container>
);

export default RecentPublications;

const Container = styled.section`
  border-top: ${({ theme: { borderWidths, colors } }) =>
    `${borderWidths[1]} solid ${colors.primaryLighten}`};
  padding-top: ${({ theme: { spacing } }) => spacing[3]};
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  ${media.md`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `}
`;

const ContentCard = styled.div`
  flex: 0 0 100%;
  margin: ${({ theme: { spacing } }) => `0 0 ${spacing[2]} 0`};

  ${media.md`
    flex: 1 1 0;
    &:nth-child(1) {
      margin-right: ${({ theme: { spacing } }) => spacing[3]};
    }
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  height: ${px2rem(450)};
  margin: ${({ theme: { spacing } }) => `${spacing[3]} 0`};
  position: relative;
  width: 100%;
`;

const CopyContent = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: block;
  font-size: ${({ theme: { spacing } }) => spacing[3]};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights[0]};
  margin: 0;
`;

const CopyContainer = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing[1]};
`;

const Copy = styled.p`
  font-size: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[2]})`};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};
  margin: ${({ theme: { spacing } }) => `0 0 ${spacing[0]} 0`};
`;

const Emphasis = styled.span`
  background-color: ${({ theme: { colors } }) => colors.primaryLighten};
`;

const Anchor = styled(Link)`
  color: ${({ theme: { colors } }) => colors.primary};
  display: block;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  font-size: ${({ theme: { spacing } }) => spacing[2]};
  margin-top: ${({ theme: { spacing } }) => spacing[2]};
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
