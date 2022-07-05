import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

type FontType = {
  폰트이름: string;
  폰트경로: string;
  폰트굵기: [number, string][];
};

const FONT: FontType = {
  폰트이름: "GmarketSans",
  폰트경로: "../../public/fonts/",
  폰트굵기: [[300, "Light"], [500, "Medium"], [700, "Bold"]],
};

const createFont = (fontData: FontType) => {
  return fontData.폰트굵기.map(([weight, weightStr]) => {
    return css`
      @font-face {
        font-family: ${fontData.폰트이름};
        font-weight: ${weight};
        src: url('${fontData.폰트경로}${fontData.폰트이름}${weightStr}.ttf') format('ttf'),
          url('${fontData.폰트경로}${fontData.폰트이름}${weightStr}.otf') format('otf'),
      }
    `;
  })
};

export default createGlobalStyle`
  ${reset};

  ${createFont(FONT)}
`;