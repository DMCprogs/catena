import React from "react";
import {
  DivContainerPageCarouselSC,
  TitleTextSC,
} from "../styled-components-css/styled.HomeCarouselPage";
import {
  ContainerSocialIconsColumns,
  ContainerSocialIconsRow,
  ContainerSocialsIcons,
  DivContainerSocialLinksSC,
  DivIconImg,
} from "../styled-components-css/styled.SocialLinks";
import Logo from "../img/LogoLink.svg";

const SocialLinks = () => {
  return (
    <DivContainerSocialLinksSC>
      <TitleTextSC>OUR SOCIAL NETWORKS</TitleTextSC>
      <ContainerSocialsIcons>
        <ContainerSocialIconsColumns>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <DivIconImg Icon={Logo} />
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <i class="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <i class="fab fa-instagram"></i>
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <i class="fab fa-youtube"></i>
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <i class="fab fa-twitter"></i>
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <i class="fab fa-pinterest"></i>
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <i class="fab fa-facebook"></i>
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <i className="fab fa-tiktok"></i>
            </div>
          </div>
        </ContainerSocialIconsColumns>
      </ContainerSocialsIcons>
    </DivContainerSocialLinksSC>
  );
};

export default SocialLinks;
