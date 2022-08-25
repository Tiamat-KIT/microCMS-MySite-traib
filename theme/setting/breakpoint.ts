import {
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  css,
} from 'styled-components';

export const breakpoint = {
  base: (
    base: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`${css(base, ...interpolations)}`,
  sm: (
    sm: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation =>
    css`@media (min-width: 640px) { ${css(sm, ...interpolations)}}`,
  md: (
    md: CSSObject | TemplateStringsArray,
    ...Interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`@media (min-width: 768px) {
    ${css(md, ...Interpolations)}
  }`,
  lg: (
    lg: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`@media (min-width:1024px){
    ${css(lg, ...interpolations)}
  }
  `,
  xl: (
    xl: CSSObject | TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
    @media (min-width: 1280px) {
      ${css(xl, ...interpolations)}
    }
  `,
};
