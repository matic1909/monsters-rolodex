import React from "react";
import styled from "styled-components";

const SearchBoxStyles = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export const SearchBox = ({ placeholder, handleChange }) => (
  <SearchBoxStyles
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
