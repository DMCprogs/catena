import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DivContainerSC,
  DivContainerFixedSC,
} from "../styled-components-css/styled.DEFAULT";
import { Form, Formik } from "formik";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import Family from "../img/Family.png";

import {
  GridContentSC,
  GridLeftContainerSC,
  TextTitleSC,
  GridBoxSC,
  TextDescriptionSC,
  GridContentFormSC,
  InputTextSC,
  GridFormRows,
  InputTextAreaSC,
  TextRightSC,
  GridFormColumns,
  GridRightColumnSC,
  DivImageSC,
  GridTextRight,
  WarningIconSC,
  HideInputSC,
  DropDownSC,
  DropDownTextSC,
  OverlayProfileImageTextSC,
  OverlayProfileImgSC,
  DivInnerPhotoInputSC,
  IconImgImgSC,
  H1SC,
  DivIconRightArrowSC,
  DivGagSC,
  GridRightColumn2SC,
} from "../styled-components-css/styled.AddAnHeir";
import GlobalDispatchContext from "../global_dispatch_context";
import EcoModal from "../components/Modal";
import {
  DivColumnContentButtonSC,
  DivIconPlusSC,
  DivTextButtonSC,
  LinkAddanHeirSC,
} from "../styled-components-css/styled.giftbox";

const AddAnHeir = () => {
  const [aspect, setAspect] = useState(1);
  const [cropType, setCropType] = useState("");
  const [apiitemData, setApiitemData] = useState(null);
  const [SelectWarning, SetSelectWarning] = useState(false);
  const [activePhotoUrl, setActivePhotoUrl] = useState("");
  // const [modalOpen, setModalOpen] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [photoUrl, setPhotoUrl] = useState({
    itemPhotoUrl: `${Family}`,
  });

  const SetSelectedWarning = () => {
    SetSelectWarning(!SelectWarning);
    if(SelectWarning === true){
      SetSelectWarning(false);

    }
  };


  const itemPhotoRef = useRef("");
  const handleUploadFile = (type) => {
    if (type === "itemPhotoRef") {
      itemPhotoRef.current.click();
    }
  };
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isOpen } = state;

  // const HandleChange = () => {
  //   dispatch({
  //     type: "SET_IS_OPEN",
  //     status: true,
  //   });
  //   console.log({ isOpen });
  // };

  const fileChangeHandler = (type) => {
    if (type === "itemPhotoRef") {
      setAspect(1);
      setCropType("itemProfilePhoto");
      dispatch({
        type: "SET_IS_OPEN",
        status: true,
      });

      const objectUrl = URL.createObjectURL(itemPhotoRef.current.files[0]);
      setActivePhotoUrl(objectUrl);
    }
  };
  return (
    <>
      <DivContainerSC>
        <DivContainerFixedSC>
          <GridBoxSC>
            <GridContentSC>
              <DivGagSC></DivGagSC>
              <GridLeftContainerSC>
                <TextTitleSC>Add an Heir</TextTitleSC>
                <GridContentFormSC>
                  <LinkAddanHeirSC to="/yourheirs">
                    <ButtonCustomSC
                      primary={true}
                      width={"211px"}
                      height={"62px"}
                      borderRadius={"50px"}
                    >
                      <DivColumnContentButtonSC>
                        <DivTextButtonSC>List of heirs</DivTextButtonSC>
                        <DivIconRightArrowSC />
                      </DivColumnContentButtonSC>
                    </ButtonCustomSC>
                  </LinkAddanHeirSC>
                  <TextDescriptionSC>
                    Fill out the form to add a new heir
                  </TextDescriptionSC>
                  <GridRightColumn2SC>

                    <input
                      ref={itemPhotoRef}
                      type="file"
                      name="itemPhoto"
                      hidden
                      onChange={() => fileChangeHandler("itemPhotoRef")}
                    />
                    <EcoModal
                      open={isOpen}
                      title="Upload a photo"
                      subTitle="Place your profile picture in the selected area"
                      cropImageModal={true}
                      cropType={cropType}
                      aspect={aspect}
                      setPhotoUrl={setPhotoUrl}
                      photoUrl={activePhotoUrl}
                    ></EcoModal>
                    <DivImageSC
                      onClick={() => handleUploadFile("itemPhotoRef")}
                      photoUrl={photoUrl.itemPhotoUrl}
                    >
                      <OverlayProfileImgSC>
                        <OverlayProfileImageTextSC>
                          Change photo
                        </OverlayProfileImageTextSC>
                      </OverlayProfileImgSC>
                      {apiitemData != null &&
                      apiitemData.length != 0 &&
                      !apiitemData.data.data.itemPhoto ? (
                        <DivInnerPhotoInputSC>
                          <IconImgImgSC />
                          <H1SC>Upload photo</H1SC>
                        </DivInnerPhotoInputSC>
                      ) : null}
                    </DivImageSC>
                  </GridRightColumn2SC>
                  <Formik>
                    {(formik) => (
                      <Form>
                        <GridFormColumns>
                          <GridFormRows>
                            <HideInputSC
                              ref={itemPhotoRef}
                              type="file"
                              name="itemPhoto"
                            />
                            <InputTextSC
                              label="Name"
                              type="textarea"
                              name="Name"
                              fullsize={true}
                              placeholder={"Name"}
                            />

                            <InputTextSC
                              label="email"
                              type="email"
                              name="email"
                              fullsize={true}
                              placeholder={"E-mail"}
                            />

                            <InputTextAreaSC
                              label="Message"
                              type="text"
                              name="Message"
                              fullsize={true}
                              placeholder={"Message..."}
                              isTextArea={true}
                            />
                            <LinkAddanHeirSC to="#">
                              <ButtonCustomSC
                                primary={true}
                                width={"211px"}
                                height={"52px"}
                                borderRadius={"500px"}
                              >
                                <DivColumnContentButtonSC>
                                  <DivTextButtonSC>Add Profile</DivTextButtonSC>
                                  <DivIconPlusSC />
                                </DivColumnContentButtonSC>
                              </ButtonCustomSC>
                            </LinkAddanHeirSC>
                          </GridFormRows>
                          <GridRightColumnSC>
                            <GridTextRight>
                              {/* <DropDownSC>
                            Recommend 400 x 400. Max size: 50MB. Click the image to upload
                            </DropDownSC> */}

                              <TextRightSC>Image of heir</TextRightSC>

                              <WarningIconSC
                                 onMouseEnter={() => setIsShown(true)}
                                 onMouseLeave={() => setIsShown(false)}
                              >
                                {isShown ? (
                                  <DropDownSC >
                                  <DropDownTextSC>
                                    Recommend 400 x 400. Max size: 50MB. Click
                                    the image to upload
                                  </DropDownTextSC>
                                </DropDownSC>) : null}
                                </WarningIconSC>
                            </GridTextRight>
                            <input
                              ref={itemPhotoRef}
                              type="file"
                              name="itemPhoto"
                              hidden
                              onChange={() => fileChangeHandler("itemPhotoRef")}
                            />
                            <EcoModal
                              open={isOpen}
                              title="Upload a photo"
                              subTitle="Place your profile picture in the selected area"
                              cropImageModal={true}
                              cropType={cropType}
                              aspect={aspect}
                              setPhotoUrl={setPhotoUrl}
                              photoUrl={activePhotoUrl}
                            ></EcoModal>
                            <DivImageSC
                              onClick={() => handleUploadFile("itemPhotoRef")}
                              photoUrl={photoUrl.itemPhotoUrl}
                            >
                              <OverlayProfileImgSC>
                                <OverlayProfileImageTextSC>
                                  Change photo
                                </OverlayProfileImageTextSC>
                              </OverlayProfileImgSC>
                              {apiitemData != null &&
                              apiitemData.length != 0 &&
                              !apiitemData.data.data.itemPhoto ? (
                                <DivInnerPhotoInputSC>
                                  <IconImgImgSC />
                                  <H1SC>Upload photo</H1SC>
                                </DivInnerPhotoInputSC>
                              ) : null}
                            </DivImageSC>
                          </GridRightColumnSC>
                        </GridFormColumns>
                      </Form>
                    )}
                  </Formik>
                </GridContentFormSC>
              </GridLeftContainerSC>
            </GridContentSC>
          </GridBoxSC>
        </DivContainerFixedSC>
      </DivContainerSC>
    </>
  );
};

export default AddAnHeir;
