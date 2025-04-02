import styled from 'styled-components';

type CustomLinkProps = {
  className?: string;
  copy: string;
  href: string;
  target: string;
  hasArrow?: boolean;
};

const CustomLink = ({
  className,
  copy,
  href,
  target,
  hasArrow,
}: CustomLinkProps) => (
  <Content className={className} href={href} target={target}>
    {copy}
    {hasArrow && <span>&#8599;</span>}
  </Content>
);

export default CustomLink;

export const Content = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: underline;
  transition: ${({ theme: { transitions } }) => transitions.medium};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primaryLighten};
  }
`;
