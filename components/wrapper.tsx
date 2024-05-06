import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { px2rem, media } from '../styles/style-utils';

type WrapperProps = {
  className?: string;
  children: ReactNode;
};

const Wrapper = ({ className, children }: WrapperProps) => (
  <Container className={className}>{children}</Container>
);

export default Wrapper;

const Container = styled.div`
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => `0 ${spacing[3]}`};

  ${media.xl`
    max-width: ${({ theme: { breakpoints } }) => px2rem(breakpoints[3])};
  `}
`;
