import styled from "styled-components/macro";

export const DivBoxThreeSectionSC = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  //grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  grid-template-rows: 1fr;
  padding: 123px;
  box-sizing: border-box;
 // border:1px solid red;
`;

export const DivContentThreeBoxSC = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
    max-width: 1420px;
  background: url('${(p) => (p.src)}') no-repeat;
  background-size: 83%;
  background-position: center;
  gap: 35px;
   align-self: center;
   margin-top: 60px;
 // border:1px solid red;
`

export const DivItemThreeSection1SC = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 100%;
  
`;



export const DivItemThreeSectionContent1SC = styled.div`
  display: grid;
  width: calc(100% - 519px);
  grid-template-rows: 1fr 2fr;
`;

export const DivItemThreeSectionContent2SC = styled.div`
  display: grid;
  width: calc(100% - 519px);
  grid-template-rows: 1fr 2fr;
  justify-items: end;
  
`;

export const H4TitleSC = styled.h4`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  color: #3C0F74;
  //display: block;
  //width: 698px;
  user-select: none;
`

export const SpanTitleSC = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  
  color: #3C0F74;
  user-select: none;
`

export const SpanTitleAlignRightSC = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  text-align: right;
  color: #3C0F74;
  user-select: none;
`