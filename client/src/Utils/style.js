import styled from "styled-components";

export const AppInput = styled.input`
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
  background: #fff;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  margin-top: 32px;
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
`;

export const AppFormLabel = styled.label`
  margin-top: 16px;
  color: #fff;
`;