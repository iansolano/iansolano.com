import styled from 'styled-components';
import { px2rem, media } from '../styles/style-utils';

const Footer = () => (
  <Items>
    <Item>
      <ItemLink href="mailto:ian@iansolano.com">email</ItemLink>
    </Item>
    <Item>
      <ItemLink href="https://twitter.com/ianrsolano">twitter</ItemLink>
    </Item>
    <Item>
      <ItemLink href="https://www.linkedin.com/in/iansolano/">
        linkedin
      </ItemLink>
    </Item>
  </Items>
);

export default Footer;

const Items = styled.ul`
  display: flex;
  margin: ${({ theme: { spacing } }) => `0 ${spacing[2]}`};
  padding: ${({ theme: { spacing } }) =>
    `0 0 calc(${spacing[1]} + ${spacing[3]}) 0`};

  ${media.md`
    margin: ${({ theme: { spacing } }) =>
      `0 calc(${spacing[1]} + ${spacing[3]})`};
  `}
`;

const Item = styled.li`
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  font-size: ${px2rem(14)};
  list-style: none;
  margin-right: ${({ theme: { spacing } }) =>
    `calc(${spacing[2]} + ${spacing[3]})`};
  text-transform: uppercase;
`;

const ItemLink = styled.a`
  color: ${({ theme: { colors } }) => colors.black};
  text-decoration: none;
  transition: ${({ theme: { transitions } }) => transitions.medium};

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
