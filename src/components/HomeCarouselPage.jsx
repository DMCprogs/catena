import React, { useState, useEffect, Children } from 'react';
import HomeCarouselItem from "./HomeCarouselItem";
import HomeCarousel from './HomeCarousel';
import {
  DivCarouselContentSC,
    DivContainerPageCarouselSC,
    TitleTextSC,

} from "../styled-components-css/styled.HomeCarouselPage";

const HomeCarouselPage = () => {
  return (
    <>
    <DivContainerPageCarouselSC>
   
        <TitleTextSC>
        THE LATEST FROM OUR BLOG
        </TitleTextSC>
        <HomeCarousel>
          <HomeCarouselItem/>
          <HomeCarouselItem/>
          <HomeCarouselItem/>
          <HomeCarouselItem/>
          <HomeCarouselItem/>
          <HomeCarouselItem/>

        </HomeCarousel>
      
    </DivContainerPageCarouselSC>
    </>
  );
};

export default HomeCarouselPage;
