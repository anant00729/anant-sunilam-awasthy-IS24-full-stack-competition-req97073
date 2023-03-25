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
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  
  @media ${SM} {
    width: 600px;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${MD} {
    width: 668px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${LG} {
    width: 1000px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${XL} {
    width: 1100px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;


export const AppInput = styled.input`
  padding: 10px 16px;
  background-color: #eff3f6;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  margin-top: 14px;
  &:focus {
    outline-width: 0;
  }
`;

export const AppTextArea = styled.textarea`
  padding: 10px 16px;
  background: #fff;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  margin-top: 14px;
  &:focus {
    outline-width: 0;
  }
`;

export const AppButton = styled.button`
  padding: 10px 16px;
  background: #4f45e4;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: white;
  cursor: pointer;
  margin-top: ${(props) => props.isFromForm ? '24px' : 0};
  &:focus {
    outline-width: 0;
  }
`;

export const AppFormLabel = styled.label`
  margin-top: 16px;
  font-size: 20px;
  margin-left: 12px;
  color: black;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: auto;
  
`;

export const SearchBar = styled.input`
  width: 400px;
  background-color: #eff3f6;
  padding: 10px 16px;
  margin-right: -4px;
  border: 0 solid transparent;
  border-radius: 4px 0 0 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  &:focus {
    outline-width: 0;
  }
  @media ${SM} {
    width: 500px;
  }
`;

export const SearchButton = styled.img`
  padding: 11px 16px;
  width: 20px;
  height: 20px;
  background: #4f45e4;
  border: 0 solid transparent;
  border-radius: 0 4px 4px 0;
  outline-color: transparent;
  color: white;
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
`;

export const PageLabel = styled.label`
  font-size: 24px;
  text-align: center;
  margin: 24px auto 16px auto;
`;