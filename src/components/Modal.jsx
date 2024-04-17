import React, { useContext, useState, useRef, useEffect } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import GlobalDispatchContext from "../global_dispatch_context";

import {
  BlockModal,
  ButtonPrevModal,
  CenterItemsSC,
  DivBoxRowModalContSC,
  DivBoxRowModalSC,
  DivWrapModal,
  EmailFieldSC,
  IoIosArrowBackSC,
  StoreCreationTitleSC,
  StoreCreationSubTitleSC,
  CropperContainer,
} from "../styled-components-css/styled.modal";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
const EcoModal = ({
  title,
  subTitle,
  cropImageModal,
  photoUrl,
  setPhotoUrl,
  photoUrls,
  aspect,
  cropType,
                    setFileImg
}) => {
  const cropperRef = useRef(null);
  let cropper;
  let imageElement;
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isOpen, modalData } = state;

  const onCrop = () => {
    imageElement = cropperRef.current;

    cropper = imageElement.cropper;

    // console.log(URL.createObjectURL(cropper));
  };
  const submitModal = (isCrop) => {
    if (isCrop) {
      if (cropType === "itemProfilePhoto") {
        cropper.getCroppedCanvas().toBlob((blob) => {
          const urlToSave = URL.createObjectURL(blob);
          setPhotoUrl({ ...photoUrls, itemPhotoUrl: urlToSave });
          if(setFileImg){
            setFileImg(blob)
          }
         
          dispatch({
            type: "SET_IS_OPEN",
            status: false,
          });
        });
      }
    }
  };

  return (
    <>
      <BlockModal isOpen={isOpen} contentLabel="Modal">
        <DivWrapModal isCropModal={cropImageModal}>
          <ButtonPrevModal
            onClick={() =>
              dispatch({
                type: "SET_IS_OPEN",
                status: false,
              })
            }
          >
            <IoIosArrowBackSC />
          </ButtonPrevModal>

          <CenterItemsSC>
            <StoreCreationTitleSC>{title}</StoreCreationTitleSC>
            <StoreCreationSubTitleSC>{subTitle}</StoreCreationSubTitleSC>
            <CropperContainer>
              {cropImageModal && (
                <Cropper
                  background={false}
                  responsive={true}
                  viewMode={1}
                  minCropBoxHeight={1}
                  minCropBoxWidth={1}
                  style={{
                    maxHeight: "600px",
                    height: "70%",
                    width: "100%",
                    maxWidth: "1420px",
                    background: "white !important",
                  }}
                  src={photoUrl}
                  aspectRatio={aspect}
                  crop={onCrop}
                  ref={cropperRef}
                />
                // <ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspectRation={1}>
                //   <img onLoad={onImageLoad} ref={imgRef} src={photoUrl} />
                // </ReactCrop>
              )}
            </CropperContainer>
            {state.modalData.button ? (
              <DivBoxRowModalContSC>
                <ButtonCustomSC
                  primary={true}
                  width={"500px"}
                  height={"55px"}
                  borderRadius={"500px"}
                  onClick={() => submitModal(cropImageModal)}
                  style={{
                    display: "grid",
                    alignSelf: "center",
                  }}
                >
                  Continue
                </ButtonCustomSC>
              </DivBoxRowModalContSC>
            ) : null}
          </CenterItemsSC>
        </DivWrapModal>
      </BlockModal>
    </>
  );
};

export default EcoModal;
