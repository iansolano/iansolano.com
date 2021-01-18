import styled from 'styled-components';

import { px2rem } from '../styles/style-utils';

type LinkProps = {
  copy: string;
  href: string;
};

const Link = ({ copy, href }: LinkProps) => (
  <Content href={href}>{copy}&#8599;</Content>
);

export default Link;

export const Content = styled.a`
  color: ${({ theme: { colors } }) => colors.black};
  cursor: url('icons/pointer.svg'), default;
  text-decoration: underline;
  transition: ${({ theme: { transitions } }) => transitions.medium};

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
