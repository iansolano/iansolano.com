import styled from 'styled-components';

import Link from './link';
import HoverCopy from './hover-copy';

import { px2rem, media } from '../styles/style-utils';
import React from 'react';

const Home = () => (
  <Container>
    <Copy>
      I am a{' '}
      <HoverCopy
        copy="Ph.D. student"
        src="/assets/graduate-student.gif"
        alt="Ph.D. Student gif"
      />{' '}
      in the School of Computing and Information Science at{' '}
      <Link
        href="https://tech.cornell.edu/"
        target="_blank"
        copy="Cornell Tech"
      />{' '}
      where I am co-advised by{' '}
      <Link
        href="https://nixdell.com/"
        target="_blank"
        copy="Dr. Nicola Dell"
      />{' '}
      and{' '}
      <Link
        href="https://www.adityavashistha.com/"
        target="_blank"
        copy="Dr. Aditya Vashistha"
      />
      . My research interests are in human-computer interaction (<Alt>HCI</Alt>
      ), information and communication technologies for development (
      <Alt>ICTD</Alt>), and machine learning for social good (<Alt>ML4SG</Alt>).
      My research focus is on building and evaluating computing technologies
      that aim to improve the lives of marginalized and underserved populations.
      In particular, I am interested in community and in-home healthcare, mental
      health, climate resilience, and responsible artificial intelligence.
    </Copy>
    <Copy>
      Prior to attending Cornell, I received an M.S. in Computer Science from{' '}
      <Link
        href="https://engineering.nyu.edu/"
        target="_blank"
        copy="New York University"
      />{' '}
      where I was a graduate research fellow at the{' '}
      <Link
        href="https://airesponsibly.net/"
        target="_blank"
        copy="Center for Responsible AI"
      />{' '}
      and where I am currently a visiting research scholar under the supervision
      of{' '}
      <Link
        href="https://engineering.nyu.edu/faculty/julia-stoyanovich"
        target="_blank"
        copy="Dr. Julia Stoyanovich"
      />
      . Before academia, I worked as a{' '}
      <HoverCopy
        copy="software engineer"
        src="/assets/software-engineer.gif"
        alt="Software engineer gif"
      />{' '}
      for various New York City technology startups. Some of my most recent work
      includes creating open-source software to make{' '}
      <Link
        href="https://opentrons.com/"
        target="_blank"
        copy="robots for biologists"
      />{' '}
      and writing software to help{' '}
      <Link
        href="https://www.hiclark.com/"
        target="_blank"
        copy="build educators into entrepreneurs"
      />
      . Outside of academic activities, I am an avid{' '}
      <HoverCopy
        copy="Muay Thai"
        src="/assets/muay-thai.jpg"
        alt="Muay thai wai kru"
      />{' '}
      practitioner, I enjoy reading (specifically about politics, race,
      technology, economics, climate justice, and{' '}
      <HoverCopy
        copy="Puerto Rican"
        src="/assets/puerto-rico.jpg"
        alt="Puerto rico independence protest"
      />
      /Latinx studies), and love to cook — plus I have been known to eat.
    </Copy>
  </Container>
);

export default Home;

const Container = styled.section`
  padding: ${({ theme: { spacing } }) => `0 ${spacing[2]}`};
  position: relative;

  ${media.md`
    max-width: ${({ theme: { breakpoints } }) => px2rem(breakpoints[3])};
    padding: ${({ theme: { spacing } }) =>
      `0 calc(${spacing[1]} + ${spacing[3]})`};
    width: 70%;
  `}
`;

const Copy = styled.span`
  display: block;
  font-size: ${({ theme: { spacing } }) => spacing[3]};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};
  margin-bottom: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[3]})`};
`;

const Alt = styled.span`
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
`;
