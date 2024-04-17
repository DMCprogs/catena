import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const ContainerSocialsIcons = styled.div`
  max-height: 300px;
  max-width: fit-content;
`;
export const DivContainerSocialLinksSC = styled.div`
  display: grid;
  justify-items: center;
  //align-items: center;
  padding-top: 100px;
  align-content: start;
  grid-template-rows: max-content;
  grid-row-gap: 65px;
  height: calc(100vh - 100px);
  // border: 1px solid red;
  margin-top: 100px;
  background-color: #fff6f9;
`;

export const ContainerSocialIconsRow = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  row-gap: 100px;

  justify-content: center;
`;
export const ContainerSocialIconsColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;

  justify-content: center;
  @media (max-width: 768px) {
    gap: 35px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const DivIconImg = styled.div`
  z-index: 1;
  background-image: ${({ Icon }) => Icon && `url(${Icon});`};
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 70px;
  height: 70px;

  margin: auto;
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;
