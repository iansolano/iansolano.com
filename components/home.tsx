import styled from 'styled-components';

import Link from './link';
import HoverCopy from './hover-copy';

import { px2rem, media } from '../styles/style-utils';

const Home = () => (
  <Container>
    <Copy>
      I am a{' '}
      <HoverCopy
        copy="graduate student"
        src="/assets/graduate-student.gif"
        alt="Graduate student gif"
      />{' '}
      in Computer Science at the{' '}
      <Link
        href="https://engineering.nyu.edu/"
        copy="NYU Tandon School of Engineering"
      />
      . My research interests are in human-computer interaction (<Alt>HCI</Alt>
      ), information and communication technologies for development (
      <Alt>ICTD</Alt>), and artificial intelligence for social good (
      <Alt>AI4SG</Alt>). I am interested in designing, developing, deploying,
      and evaluating computing technologies that aim to improve the lives of
      underserved and marginalized communities. I am specifically focused on
      areas such as population-level public health, in-home healthcare,
      automation and the future of work, environmental justice, and responsible
      automated decision systems.
    </Copy>
    <Copy>
      Prior to attending NYU, I worked as a{' '}
      <HoverCopy
        copy="software engineer"
        src="/assets/software-engineer.gif"
        alt="Software engineer gif"
      />{' '}
      for various New York City technology startups. Some of my most recent work
      includes creating open-source software to make{' '}
      <Link href="https://opentrons.com/" copy="robots for biologists" /> and
      writing software to help{' '}
      <Link
        href="https://www.hiclark.com/"
        copy="build educators into entrepreneurs"
      />
      . Outside of academic activities, I am an avid{' '}
      <HoverCopy
        copy="Muay Thai"
        src="/assets/muay-thai.jpg"
        alt="Muay thai wai kru"
      />{' '}
      practitioner, I enjoy reading (specifically about politics, race,
      technology, economics, climate change, and{' '}
      <HoverCopy
        copy="Puerto Rican"
        src="/assets/puerto-rico.jpg"
        alt="Puerto rico independence protest"
      />
      /Latinx studies), and love to cook, plus I have been known to eat.
    </Copy>
  </Container>
);

export default Home;

const Container = styled.section`
  max-width: ${({ theme: { breakpoints } }) => px2rem(breakpoints[1])};
  margin: ${({ theme: { spacing } }) => `0 ${spacing[2]}`};
  position: relative;

  ${media.md`
    margin: ${({ theme: { spacing } }) =>
      `0 calc(${spacing[1]} + ${spacing[3]})`};
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
