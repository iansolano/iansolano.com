import styled from 'styled-components';

import { px2rem } from '../styles/style-utils';

type LinkProps = {
  copy: string;
  href: string;
  target: string;
};

const Link = ({ copy, href, target }: LinkProps) => (
  <Content href={href} target={target}>
    {copy}&#8599;
  </Content>
);

export default Link;

export const Content = styled.a`
  color: ${({ theme: { colors } }) => colors.black};
  cursor: url('icons/pointer.svg'), pointer;
  text-decoration: underline;
  transition: ${({ theme: { transitions } }) => transitions.medium};

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
