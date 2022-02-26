import { css } from '@emotion/react';

const typography = {
  headline: css`
    font-family: Pretendard;
    font-size: 56px;
    line-height: 67px;
  `,
  subHeadline: css`
    font-family: Inter;
    font-size: 40px;
    line-height: 48px;
  `,
  title1: css`
    font-family: Pretendard;
    font-size: 24px;
    line-height: 32px;
  `,
  title2: css`
    font-family: Inter;
    font-size: 20px;
    line-height: 24px;
  `,
  title3: css`
    font-family: Inter;
    font-size: 16px;
    line-height: 20px;
  `,
  subTitle1: css`
    font-family: Pretendard;
    font-size: 16px;
    line-height: 22px;
  `,
  subTitle2: css`
    font-family: Inter;
    font-size: 14px;
    line-height: 17px;
  `,
  body1: css`
    font-family: Pretendard;
    font-size: 20px;
    line-height: 29px;
  `,
  body2: css`
    font-family: Pretendard;
    font-size: 14px;
    line-height: 20px;
  `,
  body3: css`
    font-family: Pretendard;
    font-size: 12px;
    line-height: 18px;
  `,
  caption: css`
    font-family: Inter;
    font-size: 11px;
    line-height: 14px;
  `,
  label1: css`
    font-family: Inter;
    font-size: 40px;
    line-height: 48px;
  `,
  label2: css`
    font-family: Inter;
    font-size: 20px;
    line-height: 24px;
  `
} as const;

export type Typography = keyof typeof typography;

export default typography;
