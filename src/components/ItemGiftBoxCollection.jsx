import React, { useState, useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import CustomInputCheckBox from "../components/CustomInputCheckBox";

import {
  DivProductImage,
  ProductCardContainer,
  ProductCardName,
  ProductCardStoreName,
  ProductCardStoreName1,
  DivColumnsNameAndDDSC,
  DivBorderSC,
  DivSelectSC,
  DivSelectedCard,
  HiCheckSC,
  DivProductContent,
  DivSelectedCard2,
} from "../styled-components-css/styled.giftboxcollection";
import {
  DivBoxDropDownSC,
  DivContainerDDSC,
  DivTextDDSC,
} from "../styled-components-css/styled.giftbox";
import CustomDropDown from "./CustomDropDown";

const ItemGiftBoxCollection = ({ all, data }) => {
  const [select, setSelect] = useState(false);
  const [openDD, setOpenDD] = useState(false);
  const OpenDropDown = () => {
    setOpenDD(!openDD);
  };
  const OpenSelect = () => {
    setSelect(!select);
  };
  const [ItemSelect, SetSelectItem] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const SetSelectedItem = () => {
    SetSelectItem(!ItemSelect);
  };
  const SetNoSelectDropDown = () => {
    SetSelectItem(false);
  };
  useEffect(() => {
    SetSelectedItem(all);
    if (all === false) {
      SetSelectItem(false);
    }
    if (all === true) {
      SetSelectItem(true);
    }
  }, [all]);

  let components = null;
  if (data) {
    const _data = JSON.parse(data);
    components = (
      <DivProductContent>
        <DivColumnsNameAndDDSC>
          <ProductCardName>
            {_data.newNft.name.length >= 20
              ? _data.newNft.name.substring(0, 17) + "..."
              : _data.newNft.name}
          </ProductCardName>
          <DivBoxDropDownSC ItemSelect={ItemSelect} onMouseEnter={()=>OpenDropDown(true)} onMouseLeave={()=>OpenDropDown(false)}>
            {openDD && (
             <DivContainerDDSC onMouseLeave={()=>OpenDropDown(false)}>
             <DivTextDDSC >Share with heirs too</DivTextDDSC>
           </DivContainerDDSC>
            )}
          </DivBoxDropDownSC>
        </DivColumnsNameAndDDSC>
        <ProductCardStoreName>{`type: ${_data.newNft.typeFile}`}</ProductCardStoreName>
        <ProductCardStoreName1>
          {_data.newNft.descriptions.length >= 20
            ? _data.newNft.descriptions.substring(0, 65) + "..."
            : _data.newNft.descriptions}
          {/* file.name.length >= 20 ? file.name.substring(0, 20) + "..." : file.name */}
        </ProductCardStoreName1>
      </DivProductContent>
    );
  }

  return (
    <ProductCardContainer
      onClick={SetSelectedItem}
      ItemSelect={ItemSelect}
      all={all}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      select={select}
    >
      {isShown ? (
        <DivSelectedCard2 ItemSelect={ItemSelect} select={select}>
          <HiCheckSC color={"white"} />
        </DivSelectedCard2>
      ) : null}
      {ItemSelect ? (
        <DivSelectedCard ItemSelect={ItemSelect} select={select}>
          <HiCheckSC color={"white"} />
        </DivSelectedCard>
      ) : null}
      {ItemSelect == false && select == true ? (
        <DivSelectedCard2 ItemSelect={ItemSelect} select={select}>
          <HiCheckSC color={"white"} />
        </DivSelectedCard2>
      ) : null}

      <DivProductImage
        ItemSelect={ItemSelect}
        hash={
          data
            ? `https://catena.mypinata.cloud/ipfs/${
                JSON.parse(data).newNft.coverHash
              }`
            : ""
        }
      ></DivProductImage>
      {components ? (
        components
      ) : (
        <DivProductContent>
          <DivColumnsNameAndDDSC>
            <ProductCardName>Name</ProductCardName>
            <DivBoxDropDownSC ItemSelect={ItemSelect}  onMouseEnter={OpenDropDown}>
              {openDD && (
                <DivContainerDDSC onMouseLeave={OpenDropDown}>
                  <DivTextDDSC onMouseLeave={OpenDropDown}>Share with heirs too</DivTextDDSC>
                </DivContainerDDSC>
              )}
            </DivBoxDropDownSC>
          </DivColumnsNameAndDDSC>
          <ProductCardStoreName>Type</ProductCardStoreName>
          <ProductCardStoreName1>Description...</ProductCardStoreName1>
        </DivProductContent>
      )}
    </ProductCardContainer>
  );
};

export default ItemGiftBoxCollection;
