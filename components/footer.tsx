import styled from 'styled-components';

import Wrapper from './wrapper';
import { px2rem, media } from '../styles/style-utils';

const Footer = () => (
  <Container>
    <FooterWrapper>
      <Link href="https://twitter.com/ianrsolano" target="_blank">
        twitter
      </Link>
      <Link
        href="https://scholar.google.com/citations?user=SBXtb3gAAAAJ&hl=en"
        target="_blank"
      >
        Google Scholar
      </Link>
      <Link href="https://www.linkedin.com/in/iansolano/" target="_blank">
        linkedin
      </Link>
    </FooterWrapper>
  </Container>
);

export default Footer;

const Container = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.tertiary};
  margin-top: ${({ theme: { spacing } }) => spacing[5]};
  padding: ${({ theme: { spacing } }) => `${spacing[2]} 0`};

  ${media.md`
    padding: ${({ theme: { spacing } }) => `${spacing[0]} 0`};
  `}
`;

const FooterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  cursor: url('icons/pointer.svg'), pointer;
  font-family: ${({ theme: { fonts } }) => fonts.tertiary};
  font-size: ${({ theme: { spacing } }) =>
    `calc(${spacing[0]} + ${spacing[2]})`};
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;

  ${media.md`
    font-size: ${({ theme: { spacing } }) => spacing[3]};
  `}
`;
