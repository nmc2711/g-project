import { createGlobalStyle, css } from 'styled-components';
import { reset } from 'styled-reset';

type FontType = {
  폰트이름: string;
  폰트경로: string;
  폰트굵기: [number, string][];
};

const FONT: FontType = {
  폰트이름: "GmarketSans",
  폰트경로: "/static/fonts/",
  폰트굵기: [[300, "Light"], [500, "Medium"], [700, "Bold"]],
};

const createFont = (fontData: FontType) => {
  return fontData.폰트굵기.map(([weight, weightStr]) => {
    return css`
      @font-face {
        font-family: ${fontData.폰트이름};
        font-weight: ${weight};
        src: url('/asset/fonts/${fontData.폰트이름}${weightStr}.ttf') format('ttf'),
          url('/asset/fonts/${fontData.폰트이름}${weightStr}.otf') format('otf'),
      }
    `;
  })
};

console.log(createFont(FONT));

export default createGlobalStyle`
  ${reset};

  ${createFont(FONT)}

  h1 {
    font-family: "GmarketSans";
    font-size: 42px;
  };
`;