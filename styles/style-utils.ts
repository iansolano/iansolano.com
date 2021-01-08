import { css, ThemedCssFunction } from 'styled-components';
import theme, { ThemeProps } from './theme';

const { breakpoints } = theme;
const SIZES = {
  sm: breakpoints[0],
  md: breakpoints[1],
  lg: breakpoints[2],
  xl: breakpoints[3],
};

export const media = (Object.keys(SIZES) as Array<keyof typeof SIZES>).reduce(
  (accumulator, label) => {
    const emSize = SIZES[label] / 16;
    accumulator[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${emSize}em) {
        ${css(first, ...interpolations)}
      }
    `;
    return accumulator;
  },
  {} as { [key in keyof typeof SIZES]: ThemedCssFunction<ThemeProps> }
);

export const px2rem = (px: number) => `${px / 16}rem`;
