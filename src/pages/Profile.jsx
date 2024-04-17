import React, { useState, useEffect, useContext, useRef } from "react";
import {
  DivContainerFixedSC,
  DivContainerSC,
} from "../styled-components-css/styled.DEFAULT";

import { Form, Formik } from "formik";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { BiWallet } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import {
  DivContentPageSC,
  H1TitleSC,
  DivTextContentSC,
  H1TextContentSC,
  GridContentSC,
  GridFormContentSC,
  DivDefaultCirlceSC,
  DivImageContentSC,
  DivButtonColumnSC,
  DivEyeVision,
  DivBoxRelativeSC,
  DivButtonsSC,
} from "../styled-components-css/styled.Profile";
import { InputTextSC } from "../styled-components-css/styled.AddAnHeir";
import { IoLogOutOutline } from "react-icons/io5";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import GlobalDispatchContext from "../global_dispatch_context";
import Web3 from "web3";
import Menu from "../components/NavMenu/Menu";
import EcoModal from "../components/Modal";
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Catena Heir",
      infuraId: {
        5: "https://goerli.infura.io/v3/dbf8d412f1c5482191cd048033486279",
      },
    },
  },
};

const Profile = (props) => {
  const [IsDisableName, SetIsDisableName] = useState(true);
  const [IsDisableSurname, SetIsDisableSurname] = useState(true);
  const [IsDisableEmail, SetIsDisableEmail] = useState(true);
  const [IsDisablePassword, SetIsDisablePassword] = useState(true);
  const [IsType, SetIsType] = useState("password");
  const [activePhotoUrl, setActivePhotoUrl] = useState("");
  const [web3Provider, setWeb3Provider] = useState(null);
  const [tokenWallet, setTokenWallet] = useState("");
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isOpen } = state;
  const [aspect, setAspect] = useState(1);
  const [cropType, setCropType] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [fileImg, setFileImg] = useState(null);
  const [isHaveToken, setIsHaveToken] = useState(false);

  useEffect(() => {



    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
      setTokenWallet(localStorage.getItem("token"));
      getData(localStorage.getItem("token"));
      setIsHaveToken(true);
    }
    const _data = localStorage.getItem("userData");

    if (_data && _data !== "") {
      const _dataTemp = JSON.parse(_data);
      setEmailValue(_dataTemp.data.user.email);
      setFirstNameValue(_dataTemp.data.user.firstName);
      setLastNameValue(_dataTemp.data.user.lastName);
    }
  }, []);

  const IsDisabledName = () => {
    SetIsDisableName(!IsDisableName);
  };
  const IsDisabledSurname = () => {
    SetIsDisableSurname(!IsDisableSurname);
  };
  const IsDisabledEmail = () => {
    SetIsDisableEmail(!IsDisableEmail);
  };
  const IsDisabledPassword = () => {
    SetIsDisablePassword(!IsDisablePassword);
  };
  const ChangeType = () => {
    SetIsType("text");

    if (IsType === "text") {
      SetIsType("password");
    }
  };

  async function getData(token) {
    if (window.ethereum) {
      try {
        let web3Modal = new Web3Modal({
          cacheProvider: true,
          providerOptions,
        });
        const web3ModalInstance = await web3Modal.connect(token);
        const web3ModalProvider = new ethers.providers.Web3Provider(
          web3ModalInstance
        );

        if (web3ModalProvider) {
          setWeb3Provider(web3ModalProvider);
        }
        console.log(web3ModalProvider);
      } catch (err) {
        console.log(err);
      }
    }
  }
  const [photoUrl, setPhotoUrl] = useState({
    itemPhotoUrl: "",
  });

  const disconnectWallet = () => {
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
    localStorage.removeItem("token");
    setIsHaveToken(false);
  };

  async function connectWallet() {
    if (window.ethereum) {
      try {
        let web3Modal = new Web3Modal({
          cacheProvider: true,
          providerOptions,
        });
        const web3ModalInstance = await web3Modal.connect();
        const web3ModalProvider = new ethers.providers.Web3Provider(
          web3ModalInstance
        );
        const web3 = new Web3(web3ModalInstance);
        const accounts = await web3.eth.getAccounts();

        if (web3ModalProvider) {
          localStorage.setItem("token", accounts[0]);
          setWeb3Provider(web3ModalProvider);
        }

        setIsHaveToken(true);
      } catch (err) {
        console.log(err);
      }
    }
  }
  const ProfilePhotoRef = useRef("");
  const handleUploadFile = (type) => {
    if (type === "ProfilePhotoRef") {
      ProfilePhotoRef.current.click();
    }
  };
  const fileChangeHandler = (type) => {
    if (type === "ProfilePhotoRef") {
      setAspect(1);
      setCropType("itemProfilePhoto");
      dispatch({
        type: "SET_IS_OPEN",
        status: true,
      });

      const objectUrl = URL.createObjectURL(ProfilePhotoRef.current.files[0]);
      setActivePhotoUrl(objectUrl);
    } else {
      // console.log('>>>>>>>>>>', itemFileRef.current.files[0].name)
      setFileImg(ProfilePhotoRef.current.files[0]);
    }
  };
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("xtoken");
    dispatch({
      type: "SET_IS_LOGIN",
      status: false,
    });
    toast('You have logged out!');
    navigate("/");
  };

  return (
    <DivContainerFixedSC>
      <DivContainerSC>
        <DivContentPageSC>
          <GridContentSC>
            <H1TitleSC>Profile</H1TitleSC>

            <Formik>
              {(formik) => (
                <Form>
                  <GridFormContentSC>
                    <DivTextContentSC>
                      <DivButtonColumnSC>
                        <InputTextSC
                          label="Name"
                          type="textarea"
                          name="Name"
                          fullsize={true}
                          placeholder={firstNameValue}
                          disabled={IsDisableName}
                          width={"470px"}
                        />
                        <RiPencilLine
                          cursor={"pointer"}
                          size={"35px"}
                          onClick={IsDisabledName}
                        />
                      </DivButtonColumnSC>
                      <DivButtonColumnSC>
                        <InputTextSC
                          label="Surname"
                          type="textarea"
                          name="Surname"
                          fullsize={true}
                          placeholder={lastNameValue}
                          disabled={IsDisableSurname}
                          width={"470px"}
                        />
                        <RiPencilLine
                          cursor={"pointer"}
                          size={"35px"}
                          onClick={IsDisabledSurname}
                        />
                      </DivButtonColumnSC>

                      <DivButtonColumnSC>
                        <InputTextSC
                          label="email"
                          type="email"
                          name="email"
                          fullsize={true}
                          placeholder={emailValue}
                          disabled={IsDisableEmail}
                          width={"470px"}
                        />
                        <RiPencilLine
                          cursor={"pointer"}
                          size={"35px"}
                          onClick={IsDisabledEmail}
                        />
                      </DivButtonColumnSC>

                      <DivButtonColumnSC>
                        <DivBoxRelativeSC>
                          <InputTextSC
                            disabled={IsDisablePassword}
                            label="password"
                            type={IsType}
                            name="password"
                            fullsize={true}
                            placeholder={"Password"}
                            width={"470px"}
                          ></InputTextSC>
                          <DivEyeVision onClick={ChangeType} />
                        </DivBoxRelativeSC>
                        <RiPencilLine
                          cursor={"pointer"}
                          size={"35px"}
                          onClick={IsDisabledPassword}
                        />
                      </DivButtonColumnSC>
                      <input
                        ref={ProfilePhotoRef}
                        type="file"
                        name="ProfilePhoto"
                        hidden
                        onChange={() => fileChangeHandler("ProfilePhotoRef")}
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
                    </DivTextContentSC>
                    <DivImageContentSC>
                      <DivDefaultCirlceSC
                        onClick={() => handleUploadFile("ProfilePhotoRef")}
                        photoUrl={photoUrl.itemPhotoUrl}
                      >
                        {photoUrl.itemPhotoUrl === "" && (
                          <>
                            <H1TextContentSC>Add profile photo</H1TextContentSC>
                          </>
                        )}
                      </DivDefaultCirlceSC>
                    </DivImageContentSC>
                  </GridFormContentSC>
                </Form>
              )}
            </Formik>
            <DivButtonsSC>
              <ButtonCustomSC
                primary={true}
                width={"250px"}
                padding={"36px 36px"}
                fontSize={"20px"}
                height={"45px"}
                borderRadius={"500px"}
                onClick={
                    isHaveToken
                    ? disconnectWallet
                    : connectWallet
                }
              >
                <DivButtonColumnSC>
                  <div>{isHaveToken ? "Disconnect wallet" : "Connect wallet"}</div>
                  <BiWallet size={"28px"} />
                </DivButtonColumnSC>
              </ButtonCustomSC>
              <ButtonCustomSC
                primary={true}
                width={"auto"}
                padding={"36px 36px"}
                fontSize={"20px"}
                height={"45px"}
                borderRadius={"500px"}
                onClick={logout}
              >
                <DivButtonColumnSC>
                  <div>Logout</div>
                  <IoLogOutOutline size={"28px"} />
                </DivButtonColumnSC>
              </ButtonCustomSC>
            </DivButtonsSC>
          </GridContentSC>
        </DivContentPageSC>
      </DivContainerSC>
    </DivContainerFixedSC>
  );
};

export default Profile;
