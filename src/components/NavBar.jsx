import React, { useContext, useEffect, useState } from "react";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { FiLogOut } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  DivContainerFixedSC,
  DivContainerSC,
} from "../styled-components-css/styled.DEFAULT";
import {
  DivBackNavBarSC,
  DivButtonColumnSC,
  DivLogoBoxSC,
  DivNavBarWrapSC,
  DivNavigationSC,
  DivNavPageBoxSC,
  DivNavPageDroptownOptionsSC,
  DivNavPageLiSC,
  LogoCatenaSC,
  LogoTextSC,
  NavBarLinkSC,
  DivBurgerCatalogSC,
  ItemBurgerCatalogSC,
  DivNavPageBoxAdaptiveSC,
  ButtonLinkSC,
} from "../styled-components-css/styled.navbar";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import GlobalDispatchContext from "../global_dispatch_context";
import Web3 from "web3";
import Menu from "./NavMenu/Menu";
import {
  DivSoundBox1SC,
  TextHomeBoxSC,
} from "../styled-components-css/styled.home";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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

// import { useMoralis } from "react-moralis";
const NavBar = () => {
  const [login, setlogin] = useState(false);
  const [web3Provider, setWeb3Provider] = useState(null);
  const [tokenWallet, setTokenWallet] = useState("");
  const [menuState, setMenuState] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isHome, isLogin, isCookie, showCatalog } = state;
  useEffect(() => {
    dispatch({
      type: "SET_SHOW_CATALOG",
      status: false,
    });
    return () => {
      dispatch({
        type: "SET_SHOW_CATALOG",
        status: true,
      });
    };
  }, [showCatalog]);

  useEffect(() => {
    const _token = localStorage.getItem("xtoken");
    if (_token && _token !== "") {
      dispatch({
        type: "SET_IS_LOGIN",
        status: true,
      });
    }
  }, []);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  // window.addEventListener("load", (e) => {
  //   console.log("hi");
  //   dispatch({
  //     type: "SET_IS_COOKIE",
  //     status: true,
  //   });
  // });

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
      setTokenWallet(localStorage.getItem("token"));
      getData(localStorage.getItem("token"));
    }
  }, []);

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
        console.log(web3ModalProvider);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const onScrollWindow = (e) => {
    if (window.location.pathname === "/") {
      dispatch({
        type: "SET_IS_WHITE_HEADER",
        status: e.target.defaultView.pageYOffset > 0,
      });
    }
  };

  useEffect(() => {
    window.onscroll = onScrollWindow;
  }, []);
  const [music, setMusic] = useState(false);
  const MusicBeh = () => {
    setMusic(!music);
  };
  window.onload = () => {
    setMusic(!music);
  };
  // const { authenticate, isAuthenticated, user } = useMoralis();

  const items = [
    { value: "Explore", href: "#" },
    { value: "Help", href: "#" },
    {
      value: (
        <DivSoundBox1SC onClick={MusicBeh}>
          {music ? (
            <div className="MusicContainer">
              <div className="Bars" />
              <div className="Bars" />
              <div className="Bars" />
              <div className="Bars" />
            </div>
          ) : (
            <div className="MusicContainerStop">
              <div className="BarsStop" />
              <div className="BarsStop" />
              <div className="BarsStop" />
              <div className="BarsStop" />
            </div>
          )}
          <TextHomeBoxSC weight={500} size={"18px"} color={"#3c0f74"}>
            {music ? "sound on" : "sound off"}
          </TextHomeBoxSC>
        </DivSoundBox1SC>
      ),
      href: "#",
    },
  ];
  const items2 = [
    { value: "Help", href: "#" },
    { value: "Collection", href: "/Collection" },
    { value: "yourheirs", href: "yourheirs" },
    { value: "Giftboxes", href: "giftboxes" },
    {
      value: (
        <DivSoundBox1SC onClick={MusicBeh}>
          {music ? (
            <div className="MusicContainer">
              <div className="Bars" />
              <div className="Bars" />
              <div className="Bars" />
              <div className="Bars" />
            </div>
          ) : (
            <div className="MusicContainerStop">
              <div className="BarsStop" />
              <div className="BarsStop" />
              <div className="BarsStop" />
              <div className="BarsStop" />
            </div>
          )}
          <TextHomeBoxSC weight={500} size={"18px"} color={"#3c0f74"}>
            {music ? "sound on" : "sound off"}
          </TextHomeBoxSC>
        </DivSoundBox1SC>
      ),
      href: "#",
    },
  ];
  return (
    <>
      <DivBackNavBarSC isHome={isHome}>
        <Toaster
          toastOptions={{
            style: {
              background: "#ffffff",
              width: "auto",
              border: "1px solid var(--red-color)",
              padding: "16px",
              color: "var(--red-color)",
            },
          }}
        />
        <DivContainerFixedSC>
          <DivNavBarWrapSC>
            <NavBarLinkSC to="/">
              <DivLogoBoxSC>
                <LogoCatenaSC />
                <LogoTextSC>CATENA</LogoTextSC>
              </DivLogoBoxSC>
            </NavBarLinkSC>
            {!isLogin ? (
              <DivNavigationSC>
                <Menu
                  height={"20%"}
                  active={menuActive}
                  setActive={setMenuActive}
                  items={items}
                />
                <DivNavPageBoxSC>
                  <NavBarLinkSC to="#">Explore</NavBarLinkSC>
                </DivNavPageBoxSC>

                <DivNavPageBoxSC>
                  <NavBarLinkSC to="#">Help</NavBarLinkSC>
                </DivNavPageBoxSC>
                <DivNavPageBoxAdaptiveSC to="/signin">
                  <ButtonCustomSC
                    primary={true}
                    width={"auto"}
                    height={"42px"}
                    padding={"0px 18px"}
                  >
                    <DivButtonColumnSC>
                      <ButtonLinkSC>Sign in</ButtonLinkSC>
                    </DivButtonColumnSC>
                  </ButtonCustomSC>
                </DivNavPageBoxAdaptiveSC>
                <DivBurgerCatalogSC onClick={() => setMenuActive(!menuActive)}>
                  <ItemBurgerCatalogSC />
                  <ItemBurgerCatalogSC />
                  <ItemBurgerCatalogSC />
                </DivBurgerCatalogSC>
              </DivNavigationSC>
            ) : (
              <DivNavigationSC>
                <Menu
                  height={"26%"}
                  active={menuActive}
                  setActive={setMenuActive}
                  items={items2}
                />
                <DivNavPageBoxSC>
                  <NavBarLinkSC to="#">Help</NavBarLinkSC>
                </DivNavPageBoxSC>
                <DivNavPageBoxSC>
                  <NavBarLinkSC to="startcollection">Collection</NavBarLinkSC>
                </DivNavPageBoxSC>
                <DivNavPageBoxSC>
                  <NavBarLinkSC to="yourheirs">Heirs</NavBarLinkSC>
                </DivNavPageBoxSC>
                <DivNavPageBoxSC>
                  <NavBarLinkSC to="giftboxes">Giftboxes</NavBarLinkSC>
                </DivNavPageBoxSC>

                <DivNavPageBoxAdaptiveSC to="profile">
                  <ButtonCustomSC
                    primary={true}
                    width={"auto"}
                    height={"42px"}
                    padding={"0px 18px"}
                  >
                    <DivButtonColumnSC>
                      <ButtonLinkSC>Profile</ButtonLinkSC>
                      <CgProfile size={"28px"} />
                    </DivButtonColumnSC>
                  </ButtonCustomSC>
                </DivNavPageBoxAdaptiveSC>
                <DivBurgerCatalogSC onClick={() => setMenuActive(!menuActive)}>
                  <ItemBurgerCatalogSC />
                  <ItemBurgerCatalogSC />
                  <ItemBurgerCatalogSC />
                </DivBurgerCatalogSC>
              </DivNavigationSC>
            )}
          </DivNavBarWrapSC>
        </DivContainerFixedSC>
      </DivBackNavBarSC>
    </>
  );
};

export default NavBar;
