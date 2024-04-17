import styled from "styled-components/macro";
import ImageIconWhite from "../img/ImageIconWhite.svg";
import IconPinkCart from "../img/IconPinkCart.svg";
import { Link } from "react-router-dom";

import { ButtonCustomSC } from "./styled.custom-button";

import { TbTrash } from "react-icons/tb";

export const DivImageIconSC = styled.div`
  background-image: url(${ImageIconWhite});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;

export const DivPinkCartIconSC = styled(TbTrash)`
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
`;

export const GridSettingsSC = styled.div`
  display: grid;
  grid-template-columns: 250px auto 140px 200px 80px 40px;
  align-items: center;
  align-self: end;
`;
export const GridSettingsCollectionSC = styled.div`
  display: grid;
  grid-template-columns: 250px auto 140px 220px 200px 80px 40px;
  align-items: center;
  align-self: end;
`;

export const DivCustomTextWhiteSC = styled.div`
  font-weight: 600;
  font-size: 24px;

  color: var(--white-color);
`;

export const ButtonCustomWhiteSC = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 5px;
  align-items: center;
  padding: 9px 18px;
  border: 2px solid #f75784;
  border-radius: 500px;
`;

export const DivCustomTextSC = styled.div`
  font-weight: 600;
  font-size: 24px;
`;

export const DivCustomTextButtonSC = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const DivCustomTextButton1SC = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const DivCustomTextButtonWhiteSC = styled.div`
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  height: 100%;
  color: var(--white-color);
  display: grid;
  align-content: center;
`;

export const DivBoxInputCheckboxSC = styled.div`
  display: grid;
  width: max-content;
  height: max-content;
  /* @media(max-width:700px){    grid-column-start: 2;
    grid-row-start: 1;} */
`;

export const GridButtonItemsSC = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 5px;
`;
