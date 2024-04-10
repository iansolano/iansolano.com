import React from 'react';
import styled from 'styled-components';
import { px2rem, media } from '../styles/style-utils';

const SecondaryType = ({ children }) => <Type>{children}</Type>;

export default SecondaryType;

const Type = styled.span`
  display: block;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  font-size: ${px2rem(14)};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};
  text-transform: uppercase;
`;
