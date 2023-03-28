import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
  overflow-y: scroll;
`;

export const ProductNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ProductNotFoundImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`