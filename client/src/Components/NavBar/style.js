import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 18px;
  background-color: white;
  width: 100%;
  box-shadow: rgb(206,207,209) 0px 2px 10px 0px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 500px;
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





