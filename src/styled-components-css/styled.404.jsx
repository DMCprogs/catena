import styled from "styled-components/macro";

export const GrifContentSC = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  max-width: var(--max-width);
  justify-content: center;
  justify-items: center;
  padding-top: 15%;
  grid-template-columns: 3fr 1fr;
  
`;

export const GridTextSC = styled.div`
  width: 95vw;
  display: grid;
  align-items: center;
  align-content: center;
  max-width: var(--max-width);
  width: 900px;
  justify-content: center;
  justify-items: center;
  grid-template-columns: max-content 1fr max-content;
  @media (max-width: 1000px) {

    padding: 0% 20%;
    max-width: 650px;
  }
  @media (max-width:768px) {

    max-width: 400px;

  }
  @media (max-width:480px) {
max-width: 350px;
}

`;
export const H1TitleSC = styled.h1`
display: flex;
align-items: center;
gap: 30px;
  color: var(--purple-color);
  font-weight: 800;
font-size: 90px;
line-height: 130%;
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
@media (max-width: 1000px) {
  justify-content: center;
  }

`;