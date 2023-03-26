import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;
  width: 50%; 
  border: 10px solid white;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  background-color: #eff3f6;
  border-radius: 2px;
`;

export const ItemContainer = styled.div`
  padding: 8px;
  word-break: break-all;
`
export const TopItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`

export const EditButton = styled.div`
  padding: 11px 16px;
  background: #4f45e4;
  border: 0 solid transparent;
  border-radius: 4px;
  outline-color: transparent;
  color: white;
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
`;
