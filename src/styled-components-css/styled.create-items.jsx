import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import imageUpload from "../img/image-upload.svg";

export const DivContainerCreateItemSC = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: calc(100vh - 100px);
  margin-top: 100px;
  width: 90vw;
  //overflow: hidden;
  //max-width: 100vw;
  //background-color: #fff;
  //margin-top: 100px;
  //border:1px solid red;
  user-select: none;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const DivBoxRowsCreateItemSC = styled.div`
  width: 100%;
  max-width: 700px;
  height: fit-content;
  display: grid;
  row-gap: 40px;
  grid-template-rows: repeat(5, max-content);
  //margin-top: 100px;
  margin-bottom: 100px;
  user-select: none;
  // border:1px solid blue;
`;
export const DivButtonCreateItemSC = styled.div`
  display: grid;
  width: 217px;
  height: 35px;
  align-items: center;
`;
export const DivTwoHoverBlocksSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 47%);
  gap: 24px;
`;
export const DivTwoRowsSC = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 16px;
`;
export const DivSizeImageSC = styled.div`
  @media(min-width: 720px){height:110px;
  width:110px;}
  @media(max-width: 720px){height:90px;
  width:90px;}
  @media(max-width: 550px){height:57px;
  width:57px;}
  @media(max-width: 450px){height:47px;
  width:47px;}
  //margin-top: 25px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const DivUploadFileSC = styled.div`
  @media(min-width: 720px){height:110px;
  width:110px;}
  @media(max-width: 720px){height:90px;
  width:90px;}
  @media(max-width: 550px){height:57px;
  width:57px;}
  @media(max-width: 450px){height:47px;
  width:47px;}
  margin-top: 12%;
  display: grid;
  justify-content: center;
  align-items: center;
`;
export const DivTwoRows2SC = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 16px;
  width: 100%;
  //min-width: 620px;
  @media (max-width: 720px) {
    width: 77vw;
    min-width: 400px;
  }
  @media (max-width: 580px) {
    width: 85vw;
    min-width: 320px;
  }
`;
export const DivPhotoBlock = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 17vw;
  height: 17vw;

  background-image: url(${({ photoUrl }) => photoUrl && `${photoUrl}`});
  /* background-image: url(${({ fileUrl }) => fileUrl && `${fileUrl}`}); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* 30% фиолетовый */

  border: 2px solid #e4cfff;
  border-radius: 28px;
  min-width: 290px;
  min-height: 290px;
  @media (max-width: 720px) {
    width: 43vw;
    height: 43vw;
    min-width: 210px;
    min-height: 210px;
  }
  @media (max-width: 450px) {
    width: 45vw;
    height: 45vw;
    min-width: 150px;
    min-height: 150px;
  }
`;

export const DivPlaceHolderItemSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  max-width: 267px;
  width: 100%;
  height: max-content;
  row-gap: 20px;
  justify-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  @media (min-width: 720px) {
    font-size: 18px;
  }
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const DivImageUploadSC = styled.div`
  background-image: url(${imageUpload});
  background-size: 100%;

  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 720px) {
    height: 110px;
    width: 110px;
  }
  @media (max-width: 720px) {
    height: 90px;
    width: 90px;
  }
  @media (max-width: 550px) {
    height: 57px;
    width: 57px;
  }
  @media (max-width: 550px) {
    height: 47px;
    width: 47px;
  }
`;

export const ButtonBrowseItemSC = styled.span`
  text-decoration: none;
  border: none;
  background-color: initial;
  width: max-content;
  height: max-content;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: var(--red-color);
  cursor: pointer;
  @media (min-width: 720px) {
    font-size: 18px;
  }
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const DivBackSpinner = styled.div`
  position: fixed;
  display: grid;
  justify-items: center;
  align-items: center;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(255,255,255,.5);
`
export const DivBoxWarningSC = styled.div`
  display: grid;
  width: 100%;
  max-width: 1000px;
  height: max-content;
  //border: 1px solid black;
`;

export const DivWarningWrapSC = styled.div`
  display: grid;
  //position: relative;
  //width: 100%;
  height: max-content;
  padding: 70px;
  //background: linear-gradient(to bottom left, var(--red-color) 40%, #FFC39E 100%);
  border-radius: 28px;
  grid-template-rows: max-content max-content;
  row-gap: 50px;
`;

export const DivAnimationBoxSC = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: fit-content;
  justify-content: center;
  grid-template-rows: max-content max-content;
  row-gap: 10px;

  
`;

export const DivWarningMassegeSC = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  opacity: 0.7;
`;

export const DivMassegeSC = styled.div`
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 130%;

text-align: center;
color: #3C0F74;


`;

export const DivUplodedFileTextSC = styled.div`
  color: var(--purple-opacity);
  display: grid;
  grid-template-rows: max-content max-content max-content;
  width: 100%;
  justify-items: center;
`;

export const TextBoxUplodedFileSC = styled.div`

`;

export const LinkConnectWalletSC = styled(Link)`
text-decoration: none;
cursor: pointer;
color: var(--red-color);

`;
