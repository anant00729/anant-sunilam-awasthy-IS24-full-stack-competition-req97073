import styled from "styled-components";

/* Extra small devices (phones, 600px and down) */
export const XS = "(max-width: 600px)";

/* Small devices (portrait tablets and large phones, 600px and up) */
export const SM = "(min-width: 600px)";

/* Medium devices (landscape tablets, 768px and up) */
export const MD = "(min-width: 768px)";

/* Large devices (laptops/desktops, 992px and up) */
export const LG = "(min-width: 992px)";

/* Extra large devices (large laptops and desktops, 1200px and up) */
export const XL = "(min-width: 1200px)";

export const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 10px solid green;

  @media ${SM} {
    width: 600px;
    margin: unset;
  }

  @media ${MD} {
    width: 668px;
    margin: unset;
  }

  @media ${LG} {
    width: 1000px;
    margin: auto;
  }

  @media ${XL} {
    width: 1100px;
    margin: auto;
  }
`;

export const PageContainer = styled.div`
  position: relative;
`;