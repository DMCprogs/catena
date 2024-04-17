import styled from "styled-components/macro";
import { HiOutlineEye } from "react-icons/hi";

export const DivContentPageSC = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  max-width: var(--max-width);
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;
export const DivEyeVision = styled(HiOutlineEye)`
  font-size: 30px;
  position: absolute;
  right: 32px;
  top: 23px;
  color: rgba(109, 75, 151, 0.5);
  cursor: pointer;
  z-index: 0;
`;
export const DivBoxRelativeSC = styled.div`
  display: grid;
  position: relative;

`;
export const DivButtonsSC = styled.div`
  display: grid;
    grid-template-columns: max-content max-content;
    gap: 30px;

`;
export const GridContentSC = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  max-width: var(--max-width);
  grid-template-rows: repeat(3, max-content);
  gap: 48px;
`;
export const GridFormContentSC = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  max-width: var(--max-width);
  grid-template-columns: 2fr 1fr;
`;

export const DivButtonColumnSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  align-content: center;
  grid-template-columns: max-content max-content;
  justify-content: start;
  column-gap: 7px;
`;
export const H1TextContentSC = styled.h1`
font-weight: 500;
font-size: 24px;
line-height: 150%;
`;
export const H1TitleSC = styled.h1`
display: flex;
align-items: center;
gap: 30px;
  color: var(--purple-color);
  font-weight: 800;
  font-size: 54px;
font-weight: ${({ fontWeight }) => fontWeight && `${fontWeight}`};
font-size: ${({ fontSize }) => fontSize && `${fontSize}`};
@media (max-width: 1000px) {
    grid-template-columns: 1fr;
    font-size: ${({ fontSizeMiddle }) => fontSizeMiddle && `${fontSizeMiddle}`};

  }

  @media (max-width:768px) {
    font-size: ${({ fontSizeSmall768 }) => fontSizeSmall768 && `${fontSizeSmall768}`};
    gap: 15px;
  }
  @media (max-width:480px) {
    font-size: ${({ fontSizeSmall480 }) => fontSizeSmall480 && `${fontSizeSmall480}`};
  }
`;

export const DivTextContentSC = styled.div`
display: grid;
grid-template-rows: repeat(2, max-content);
align-items: center;
align-content: center;
grid-row-gap: 24px;
@media (max-width: 1000px) {
  justify-content: center;
  }

`;

export const DivDefaultCirlceSC = styled.div`
display: grid;
width: 280px;
aspect-ratio: 1/1;
background: #FFEEF3;
border-radius: 100%;
align-items: center;
align-content: center;
justify-content: center;
justify-self: right;
background-image: url(${({ photoUrl }) => photoUrl && `${photoUrl}`});
  /* background-image: url(${({ fileUrl }) => fileUrl && `${fileUrl}`}); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
@media (max-width: 1000px) {
  justify-content: center;
  }

`;

export const DivImageContentSC = styled.div`
display: grid;
grid-template-rows: repeat(2, max-content);
align-items: top;
align-content: top;
@media (max-width: 1000px) {
  justify-content: center;
  }

`;