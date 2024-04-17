import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DropDownSC,
  DropDownTextSC,
  GridTextRight,
  HideInputSC,
  InputTextAreaSC,
  InputTextSC,
  TextDescriptionSC,
  TextRightSC,
  WarningIconSC,
} from "../styled-components-css/styled.AddAnHeir";
import {
  ButtonBrowseItemSC,
  DivBoxRowsCreateItemSC,
  DivButtonCreateItemSC,
  DivContainerCreateItemSC,
  DivImageUploadSC,
  DivPhotoBlock,
  DivPlaceHolderItemSC,
  DivTwoHoverBlocksSC,
  DivTwoRowsSC,
  DivTwoRows2SC,
  DivSizeImageSC,
  DivBackSpinner,
  DivBoxWarningSC,
  DivWarningWrapSC,
  DivAnimationBoxSC,
  DivWarningMassegeSC,
  DivMassegeSC,
  LinkConnectWalletSC,
  DivUplodedFileTextSC,
  DivUploadFileSC,
} from "../styled-components-css/styled.create-items";
import {
  DivTextButtonSC,
  DivTitleGiftBoxSC,
} from "../styled-components-css/styled.giftbox";
import GlobalDispatchContext from "../global_dispatch_context";
import { Form, Formik } from "formik";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import EcoModal from "../components/Modal";
import { FiUpload } from "react-icons/fi";
import { TbFileCheck } from "react-icons/tb";
import axios from "axios";
import abi from "../abi/abi.json";
import * as dotenv from "dotenv";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import toast from 'react-hot-toast';
dotenv.config();

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

const CreateItem = () => {
  let navigate = useNavigate();
  const [aspect, setAspect] = useState(1);
  const [cropType, setCropType] = useState("");
  const [SelectWarning, SetSelectWarning] = useState(false);
  const [SelectWarning2, SetSelectWarning2] = useState(false);
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [activePhotoUrl, setActivePhotoUrl] = useState("");
  const [fileImg2, setFileImg] = useState(null);
  const [file, setFile] = useState(null);
  const [web3Provider, setWeb3Provider] = useState(null);
  const [isShowSpinner, setIsShowSpinner] = useState(false);
  // const [modalOpen, setModalOpen] = useState(true);
  // const client = new NFTStorage({ token: localStorage.getItem('token') })
  // const placeHolder = { photo: <><div>jopa</div></> , file: <><div>drugayajopa</div></> };

  useEffect(() => {
    // setTokenWallet(localStorage.getItem('token'))
    if (localStorage.getItem("token")) {
      getData(localStorage.getItem("token"));
    }
  }, []);

  const [photoUrl, setPhotoUrl] = useState({
    itemPhotoUrl: "",
  });
  const [FileUrl, setFileUrl] = useState({
    itemFileUrl: "",
  });

  const SetSelectedWarning = () => {
    SetSelectWarning(!SelectWarning);
  };
  const SetSelectedWarning2 = () => {
    SetSelectWarning2(!SelectWarning2);
  };
  const itemPhotoRef = useRef("");
  const itemFileRef = useRef("");

  const handleUploadFile = (type) => {
    if (type === "itemPhotoRef") {
      itemPhotoRef.current.click();
    }
    if (type === "itemFileRef") {
      itemFileRef.current.click();
    }
  };
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isOpen } = state;
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
    } else {
      setFile(itemFileRef.current.files[0]);
      // setFileImg(itemFileRef.current.files[0])
    }
  };

  const sendFileToIPFS = async (_fileImg, fileName, fileDesc) => {
    if (_fileImg && fileName && fileDesc) {
      try {
        const formData = new FormData();
        formData.append("file", _fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
            pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        const daiContract = new ethers.Contract(
          "0x865c56Bbd74266A5cdbff7cb33D52A4Ae2Af1672",
          abi,
          web3Provider
        );

        const signer = web3Provider.getSigner();
        const daiContractWithSigner = daiContract.connect(signer);
        const temp = daiContractWithSigner.functions.uploadFile(
          resFile.data.IpfsHash,
          resFile.data.PinSize,
          _fileImg.type === "" ? "jpeg" : _fileImg.type,
          name,
          desc
        );
        temp.then((item) => {
          //console.log('>>>>>>>>>', item);

          // navigate("../collection", { replace: true });
          sendFileIMGToIPFS(
            fileImg2,
            name,
            desc,
            resFile.data.IpfsHash,
            _fileImg.type === "" ? "jpeg" : _fileImg.type
          );
        });
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };

  const sendFileIMGToIPFS = async (
    fileImg,
    fileName,
    fileDesc,
    hashFileNFT,
    typeFile
  ) => {
    if (fileImg && fileName && fileDesc) {
      try {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
            pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
            "Content-Type": "multipart/form-data",
          },
        });

        const apiUrl = "https://catena-lbnvm6nhbq-uc.a.run.app/api/v1/nft/save";
        const _startingValues = {
          nftHash: hashFileNFT,
          coverHash: resFile.data.IpfsHash,
          name: fileName,
          descriptions: fileDesc,
          typeFile: typeFile,
        };

        const _token = localStorage.getItem("xtoken");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Bearer", `${_token}`);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(_startingValues),
          redirect: "follow",
        };

        fetch(apiUrl, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            // navigate("../collection", { replace: true });
            let list = [];
            if (localStorage.getItem("listNft")) {
              list = JSON.parse(localStorage.getItem("listNft"));
            }
            list.push(result);

            localStorage.setItem("listNft", JSON.stringify(list));
            //console.log(result);
            setIsShowSpinner(false);
            toast('Success!',{ icon: '👌'});
            navigate("../startcollection", { replace: true });
          })
          .catch(() => toast('Oops!',{ icon: '👎'}));
        // axios.post(apiUrl, JSON.stringify(_startingValues), {headers:myHeaders}).then((resp) => {
        //
        //     console.log('>>>><><><><>', resp)
        //
        // });
        // const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
        toast('Oops!',{ icon: '👎'})
      }
    }
  };
  const [isShown, setIsShown] = useState(false);
  const [isShownWarning, setIsShownWarning] = useState(false);
  const getData = async (token) => {
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
        // const web3 = new Web3(web3ModalInstance);
        // web3.eth.getBalance(token)
        //     .then(console.log);

        if (web3ModalProvider) {
          setWeb3Provider(web3ModalProvider);
        }
        console.log(web3ModalProvider);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onClickCreateItem = () => {
    setIsShowSpinner(true);
    sendFileToIPFS(file, name, desc);
    
  };

  return (
    <>
      {localStorage.getItem("token") &&
      localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") ? (
        <DivContainerCreateItemSC>
          <div>
            <DivBoxRowsCreateItemSC>
              <DivTitleGiftBoxSC>Create item</DivTitleGiftBoxSC>
              <TextDescriptionSC>
                Fill out the form to create a new item
              </TextDescriptionSC>
              <DivTwoRowsSC>
                <DivTwoHoverBlocksSC>
                  <GridTextRight>
                    {/* <DropDownSC>
                            Recommend 400 x 400. Max size: 50MB. Click the image to upload
                            </DropDownSC> */}

                    <TextRightSC>Upload the file</TextRightSC>

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
                  <GridTextRight>
                    {/* <DropDownSC>
                            Recommend 400 x 400. Max size: 50MB. Click the image to upload
                            </DropDownSC> */}

                    <TextRightSC>Item cover</TextRightSC>

                    <WarningIconSC
                                 onMouseEnter={() => setIsShownWarning(true)}
                                 onMouseLeave={() => setIsShownWarning(false)}
                              >
                                {isShownWarning ? (
                                  <DropDownSC >
                                  <DropDownTextSC>
                                    Recommend 400 x 400. Max size: 50MB. Click
                                    the image to upload
                                  </DropDownTextSC>
                                </DropDownSC>) : null}
                                
                              </WarningIconSC>
                  </GridTextRight>
                </DivTwoHoverBlocksSC>
                <DivTwoHoverBlocksSC>
                  {/*<HideInputSC*/}
                  {/*  ref={itemPhotoRef}*/}
                  {/*  type="file"*/}
                  {/*  name="itemPhoto"*/}
                  {/*/>*/}
                  {/*<HideInputSC ref={itemFileRef} type="file" name="itemPhoto" />*/}
                  <input
                    ref={itemFileRef}
                    type="file"
                    name="itemFile"
                    hidden
                    onChange={() => fileChangeHandler("itemFileRef")}
                  />
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
                    setFileImg={setFileImg}
                  ></EcoModal>
                  <DivPhotoBlock
                    onClick={() => handleUploadFile("itemFileRef")}
                  >
                    {FileUrl.itemFileUrl === "" && (
                      <>
                        <DivPlaceHolderItemSC>
                          {file ? (
                            <>
                              <DivUploadFileSC>
                                <TbFileCheck size={"100%"} />
                              </DivUploadFileSC>
                              <DivUplodedFileTextSC>
                                <div>You have uploded a file</div>
                                <div>{file.name.length >= 20 ? file.name.substring(0, 20) + "..." : file.name}</div>
                                <div><ButtonBrowseItemSC> Browse</ButtonBrowseItemSC></div>
                          
                                
                              </DivUplodedFileTextSC>
                            </>
                          ) : (
                            <>
                              <DivSizeImageSC>
                                <FiUpload size={"auto"} />
                              </DivSizeImageSC>
                              <div style={{ color: "#6d4b97b7" }}>
                                Drag and drop a file, or
                                <ButtonBrowseItemSC> Browse</ButtonBrowseItemSC>
                              </div>
                            </>
                          )}
                        </DivPlaceHolderItemSC>
                      </>
                    )}
                  </DivPhotoBlock>
                  <DivPhotoBlock
                    onClick={() => handleUploadFile("itemPhotoRef")}
                    photoUrl={photoUrl.itemPhotoUrl}
                  >
                    {photoUrl.itemPhotoUrl === "" && (
                      <>
                        <DivPlaceHolderItemSC>
                          <DivImageUploadSC />
                          <div style={{ color: "#6d4b97b7" }}>
                            Drag and drop an image, or{" "}
                            <ButtonBrowseItemSC> Browse</ButtonBrowseItemSC>
                          </div>
                        </DivPlaceHolderItemSC>
                      </>
                    )}
                  </DivPhotoBlock>
                </DivTwoHoverBlocksSC>
              </DivTwoRowsSC>
              <DivTwoRows2SC>
                <InputTextSC
                  label="Name"
                  type="textarea"
                  name="Name"
                  placeholder={"Name"}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <InputTextAreaSC
                  label="Message"
                  type="text"
                  name="Message"
                  placeholder={"Message..."}
                  isTextArea={true}
                  onChange={(e) => setDesc(e.currentTarget.value)}
                />
              </DivTwoRows2SC>
              <ButtonCustomSC
                primary={true}
                width={"217px"}
                height={"72px"}
                borderRadius={"500px"}
                onClick={onClickCreateItem}
                statusOpasity={!(file && name && desc)}
                disabled={!(file && name && desc)}
              >
                <DivButtonCreateItemSC>
                  <DivTextButtonSC>Create item</DivTextButtonSC>
                </DivButtonCreateItemSC>
              </ButtonCustomSC>
              {isShowSpinner ? (
                <DivBackSpinner>
                  <HashLoader color="#f75784" />
                </DivBackSpinner>
              ) : null}
            </DivBoxRowsCreateItemSC>
          </div>
        </DivContainerCreateItemSC>
      ) : (
        <DivContainerCreateItemSC>
          <DivBoxWarningSC>
            <DivWarningWrapSC>
              <DivAnimationBoxSC>
                <div class="face">
                  <div class="eye"></div>
                  <div class="eye right"></div>
                  <div class="mouth happy"></div>
                </div>
                <div class="shadow scale"></div>
              </DivAnimationBoxSC>
              <DivWarningMassegeSC>
                <DivMassegeSC>
                  Before you create an item you need to{" "}
                  <LinkConnectWalletSC to="/profile">
                    connect a wallet
                  </LinkConnectWalletSC>
                  .
                  <br />
                  If you do not have a wallet, you need to create it &#40;
                  <a href="https://metamask.io/" className="link-create-wallet">
                    Metamask
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.coinbase.com"
                    className="link-create-wallet"
                  >
                    Coinbase
                  </a>
                  &#41;, after creating and connecting, try again.
                </DivMassegeSC>
              </DivWarningMassegeSC>
            </DivWarningWrapSC>
          </DivBoxWarningSC>
        </DivContainerCreateItemSC>
      )}
    </>
  );
};

export default CreateItem;
