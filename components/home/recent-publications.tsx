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
            src="/assets/images/chw-interview.png"
            alt="A picture of a community health worker in an interview comparing a doll to an iPad AI decision."
            style={{ objectFit: 'cover' }}
            fill={true}
            sizes="640px"
          />
        </ImageContainer>
        <CopyContent>
          <Content>
            <CustomLink
              href="/assets/documents/Explorable-Explainable-AI-CHI24.pdf"
              copy="Explorable Explainable AI: Improving AI Understanding for Community Health Workers in India"
              target="_blank"
              hasArrow={true}
            />
            <CopyContainer>
              <Copy>
                <Emphasis>Ian René Solano-Kamaiko</Emphasis>, Dibyendu Mishra,
                Nicola Dell, Aditya Vashistha.{' '}
                <i>
                  Proceedings of the 2024 ACM Conference on Human Factors in
                  Computing Systems (CHI '24)
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
            src="/assets/images/ct-diagram.png"
            alt="An image of a triple Venn diagram: social science, engineering, and design. With contextual transparency as the overlapping center."
            style={{ objectFit: 'cover' }}
            fill={true}
            sizes="640px"
          />
        </ImageContainer>
        <CopyContent>
          <Content>
            <CustomLink
              href="/assets/documents/Contextual-Transparency-Nature23.pdf"
              copy="Introducing Contextual Transparency for Automated Decision Systems"
              target="_blank"
              hasArrow={true}
            />
            <CopyContainer>
              <Copy>
                Mona Sloane, <Emphasis>Ian René Solano-Kamaiko</Emphasis>, Jun
                Yuan, Aritra Dasgupta, Julia Stoyanovich.{' '}
                <i>Nature Machine Intelligence (March 2023)</i>.
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
  cursor: url('icons/pointer.svg'), pointer;
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
