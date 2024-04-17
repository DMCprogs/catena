import React, { useState, useEffect, Children } from "react";
import { cloneElement } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  DivArrowBackgroundSC,
  DivCarouselAllItemsSC,
  DivCarouselContainerSC,
  DivCarouselMainSC,
  DivCarouselWindowSC,
} from "../styled-components-css/styled.HomeCarouselPage";

const HomeCarousel = ({ children }) => {
  const [items, setItems] = useState([]);
  const [carouselNumber, setCarouselNumber] = useState(0);
  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: "1600",
            maxWidth: "1600",
          },
        });
      })
    );
  }, []);

  const handleLefttArrow = () => {
    setCarouselNumber(carouselNumber - 1);
  };

  const handleRighttArrow = () => {
    setCarouselNumber(carouselNumber + 1);
  };

  return (
    <>
      <DivCarouselContainerSC>
        {carouselNumber !== 0 ? (
          <DivArrowBackgroundSC arrow={"left"} onClick={handleLefttArrow}>
            <FiChevronLeft />
          </DivArrowBackgroundSC>
        ) : (
          <div></div>
        )}
        <DivCarouselMainSC>
          <DivCarouselWindowSC>
            <DivCarouselAllItemsSC carouselNumber={carouselNumber}>
              {items}
            </DivCarouselAllItemsSC>
          </DivCarouselWindowSC>
        </DivCarouselMainSC>
        {carouselNumber !== items.length - 3 ? (
          <DivArrowBackgroundSC arrow={"right"} onClick={handleRighttArrow}>
            <FiChevronRight />
          </DivArrowBackgroundSC>
        ) : (
          <div></div>
        )}
      </DivCarouselContainerSC>
    </>
  );
};

export default HomeCarousel;
