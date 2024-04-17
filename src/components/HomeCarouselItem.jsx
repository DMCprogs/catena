import React, { useState, useEffect, Children } from 'react';
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";

import {
  HomeCarouselItemSC,
  DivImageItemSC,
  GridItemInfoSC,
  DivTitleItemSC,
  DivDescriptionItemSC
} from "../styled-components-css/styled.HomeCarouselPage";

const HomeCarouselItem = () => {


  return (
    <>
    <HomeCarouselItemSC>
        <DivImageItemSC/>
        <GridItemInfoSC>
          <DivTitleItemSC>
          THE LATEST FROM OUR BLOG
          </DivTitleItemSC>
          <DivDescriptionItemSC>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non enim, faucibus sagittis bibendum nunc, libero fringilla viverra pretium. Morbi pretium commodo non ullamcorper mi. Elit nisl turpis erat diam cras sit molestie pulvinar. Tellus sed malesuada dui pharetra tellus cras dictum vehicula eget. Gravida elementum enim mi suspendisse quam dictumst auctor enim. Sit morbi.
          </DivDescriptionItemSC>
          <ButtonCustomSC
          primary={true}
          width={"116px"}
           height={"42px"}>Read now</ButtonCustomSC>
        </GridItemInfoSC>
    </HomeCarouselItemSC>
    </>
  );
};

export default HomeCarouselItem;
