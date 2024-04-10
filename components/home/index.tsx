import React from 'react';
import styled from 'styled-components';

import CustomLink from '../custom-link';
import Wrapper from '../wrapper';
import CurrentResearch from './current-research';
import RecentPublications from './recent-publications';

import { px2rem, media } from '../../styles/style-utils';

const Home = () => (
  <Wrapper>
    <Marquee>
      Designing, building, and evaluating technologies for underserved
      communities.
    </Marquee>
    <Copy>
      I am a Ph.D. student in the School of Computing and Information Science at{' '}
      <CustomLink
        href="https://tech.cornell.edu/"
        target="_blank"
        copy="Cornell Tech"
      />{' '}
      where I am co-advised by{' '}
      <CustomLink
        href="https://nixdell.com/"
        target="_blank"
        copy="Dr. Nicola Dell"
      />{' '}
      and{' '}
      <CustomLink
        href="https://www.adityavashistha.com/"
        target="_blank"
        copy="Dr. Aditya Vashistha"
      />
      , with additional mentorship from{' '}
      <CustomLink
        href="https://destrin.tech.cornell.edu/"
        target="_blank"
        copy="Dr. Deborah Estrin"
      />
      .
    </Copy>
    <Copy>
      My research interests are in human-computer interaction (<Alt>HCI</Alt>
      ), information and communication technologies for development (
      <Alt>ICTD</Alt>), and responsible artificial intelligence (<Alt>R/AI</Alt>
      ). I work on designing, building, and evaluating sociotechnical systems
      that enable positive social transformation for underserved communities. My
      research focuses on intractable yet critical problems related to computing
      in high-stakes healthcare settings &mdash; particularly with respect to
      social determinants of health for community and home health workers.
    </Copy>
    <Copy>
      Prior to attending Cornell, I received an M.S. in Computer Science from{' '}
      <CustomLink
        href="https://engineering.nyu.edu/"
        target="_blank"
        copy="New York University"
      />{' '}
      where I was a graduate research fellow (and currently visiting scholar) at
      the{' '}
      <CustomLink
        href="https://airesponsibly.net/"
        target="_blank"
        copy="Center for Responsible AI"
      />{' '}
      under the supervision of{' '}
      <CustomLink
        href="https://engineering.nyu.edu/faculty/julia-stoyanovich"
        target="_blank"
        copy="Dr. Julia Stoyanovich"
      />
      . Before academia, I worked as a software engineer for various New York
      City technology startups. Some of my most recent work includes creating
      open-source software to make{' '}
      <CustomLink
        href="https://opentrons.com/"
        target="_blank"
        copy="robots for biologists"
      />{' '}
      and writing software to help{' '}
      <CustomLink
        href="https://www.hiclark.com/"
        target="_blank"
        copy="build educators into entrepreneurs"
      />
      . Outside of academic activities, I am an avid Muay Thai practitioner, I
      enjoy{' '}
      <CustomLink
        href="https://www.goodreads.com/user/show/122249441-ian-ren-solano-kamaiko"
        target="_blank"
        copy="reading"
      />
      , and love to cook — plus I have been known to eat.
    </Copy>
    <CurrentResearch />
    <RecentPublications />
  </Wrapper>
);

export default Home;

const Marquee = styled.h1`
  font-size: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[3]})`};
  font-family: ${({ theme: { fonts } }) => fonts.tertiary};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights[3]};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[0]};
  text-transform: uppercase;

  ${media.md`
    font-size: ${({ theme: { spacing } }) =>
      `calc(${spacing[1]} + ${spacing[4]})`};
  `}
`;

const Copy = styled.p`
  display: block;
  font-size: ${({ theme: { spacing } }) => spacing[3]};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};
  margin-bottom: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[3]})`};
`;

const Alt = styled.span`
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
`;
