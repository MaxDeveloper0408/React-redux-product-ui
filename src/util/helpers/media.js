import { css } from 'styled-components';

export const media = {
  xs: (...args) => css`
    @media (min-width: 0) and (max-width: 599px) {
    ${css(...args)}
    }
    `,
  sm: (...args) => css`
    @media (min-width: 600px) and (max-width: 959px) {
    ${css(...args)}
    }
    `,
  md: (...args) => css`
    @media (min-width: 960px) and (max-width: 1280px) {
    ${css(...args)}
    }
    `,
  lg: (...args) => css`
    @media only screen and (min-width: 1280px) {
    ${css(...args)}
    }
    `
};
