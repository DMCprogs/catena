import styled from "styled-components/macro";
import dropdown from "../img/DropDown.svg";

export const DivBoxRowsGiftBoxForYouSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-rows: 182px 148px 515px 503px;
  margin-bottom: 182px;
`;

export const DivBoxTextDescriptonSC = styled.div`
  width: 100%;
  height: 100%;
  max-width: 818px;
  max-height: 124px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #6d4b97;
  display: grid;
  align-self: end;
  @media(max-width:1024px){
    font-size: 20px;}
  
    @media(max-width:650px){
    font-size: 16px;
   }
   @media(max-width:360px){
    font-size: 15px;
   }
  
`;
