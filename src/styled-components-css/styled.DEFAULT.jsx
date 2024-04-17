import styled from "styled-components/macro";

export const DivContainerSC = styled.div`
  margin: 0 auto;
  // max-width: var(--max-width);
  min-height: calc(100vh - 100px);
  // width: 90vw;
  overflow: hidden;
  max-width: 100vw;
  max-width: var(--max-width);
  //background-color: #fff;
  margin-top: 100px;
  //border:1px solid red;
`;
export const DivContainerHomeSC = styled.div`
  margin: 0 auto;
  // max-width: var(--max-width);
  min-height: calc(95vh - 280px);
  height: calc(686vh - 280px);
  // width: 90vw;
  overflow: hidden;
  max-width: 100vw;
  //background-color: #fff;
  //margin-top: 100px;
  background-color: var(--mint-color);
  user-select: none;
`;

export const DivContainerFixedSC = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: calc(85vh);
  width: 95vw;
  //overflow: hidden;
  max-width: 100vw;
  max-width: var(--max-width);
  //background-color: #fff;
  //margin-top: 100px;
  //border:1px solid red;
  user-select: none;
`;

export const DivContainerGiftBoxSC = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: calc(100vh);
  width: 90vw;
  //overflow: hidden;
  max-width: 100vw;
  max-width: var(--max-width);
  //background-color: #fff;
  //margin-top: 100px;
  //border:1px solid red;
  user-select: none;
  @media (max-width: 480px) {
    margin-right: 35px;
  }
  @media (max-width: 400px) {
    margin-right: 20px;
  }
`;
