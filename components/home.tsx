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
        copy="graduate student"
        src="/assets/graduate-student.gif"
        alt="Graduate student gif"
      />{' '}
      in computer science at the{' '}
      <Link
        href="https://engineering.nyu.edu/"
        target="_blank"
        copy="NYU Tandon School of Engineering"
      />{' '}
      and a graduate research fellow at the{' '}
      <Link
        href="https://airesponsibly.net/"
        target="_blank"
        copy="Center for Responsible AI at NYU"
      />
      . My research interests are in human-computer interaction (<Alt>HCI</Alt>
      ), information and communication technologies for development (
      <Alt>ICTD</Alt>), and machine learning for social good (<Alt>ML4SG</Alt>).
      Currently, I am researching the accuracy-explainability trade-off in
      machine learning for public policy applications under the supervision of{' '}
      <Link
        href="http://stoyanovich.org/"
        target="_blank"
        copy="Dr. Julia Stoyanovich"
      />{' '}
      and{' '}
      <Link
        href="http://research.poly.edu/~onov/"
        target="_blank"
        copy="Dr. Oded Nov"
      />
      . Additionally, under the supervision of Dr. Stoyanovich I am pursuing my
      master's thesis building{' '}
      <Link
        href="https://www.wsj.com/articles/hiring-job-candidates-ai-11632244313?st=z9c8ww2udg3sj1p&reflink=desktopwebshare_permalink"
        target="_blank"
        copy="transparency and explainability tools"
      />{' '}
      for algorithmic hiring.
    </Copy>
    <Copy>
      I am interested in building and evaluating computing technologies that aim
      to improve the lives of underserved and marginalized communities. I am
      specifically focused on areas such as community and in-home healthcare,
      automation and the future of work, environmental justice, and responsible
      automated decision systems. Prior to attending NYU, I worked as a{' '}
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
