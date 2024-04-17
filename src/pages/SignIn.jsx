import React, { useState, useEffect, useContext, useRef } from "react";

import axios from "axios";
import toast from 'react-hot-toast';
//import { useCookies } from "react-cookie";
import {
  H4Title,
  LabelSC,
  DivBoxSC,
  DivBoxRowsSC,
  DivBoxColumnsSC,
  InputSC,
  DivBoxRowSC,
  InputFullWidthSC,
  ButtonSC,
  DivBoxTextSC,
  SpanQuSC,
  LinkSC,
  DivBoxFormSC,
  DivBoxBoxFormSC,
  DivBackgroundFormSC,
  SpanSC,
  DivRegSC,
  DivBackgroundPeopleSC,
  DivTextBoxSC,
  SpanFirstSC,
  SpanSecondSC,
  DivBoxFormSignInSC,
  DivBoxRowSISC,
  DivTextBoxSISC,
  CheckboxItemInput,
  InputEmailSC,
} from "../styled-components-css/styles.registration";
//import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import { signInSchema } from "../components/validations/validation.signin";
import { Formik, Form } from "formik";
//import TextField from "../components/TextField";
//import { FlowerLoaderSc } from "../styled-components-css/styles.loader";
import { useNavigate } from "react-router";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { DivTextButtonSC } from "../styled-components-css/styled.giftbox";
import { DivBoxInputCheckboxSC } from "../styled-components-css/styled.StartCollection";
import CustomInputCheckBox from "../components/CustomInputCheckBox";
//import { toast } from "react-toastify";
//import { useAuth } from "../context/AuthContext";
//import useAxiosFunction from "../hooks/useAxiosFunction";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
import GlobalDispatchContext from "../global_dispatch_context";
import {
  DivContainerFixedSC,
  DivContainerSC,
} from "../styled-components-css/styled.DEFAULT";

const SignIn = (props) => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isLogin } = state;
  // const { login, logout, loggedIn, setFormValues, authError } = useAuth();
  //const [response, error, loading, axiosFetch] = useAxiosFunction();

  //const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const toastId = useRef(null);
  let navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const check = () => {
    setChecked(!checked);
  };

  /* useEffect ( () => {
      if (response.length === 0) {
        console.log("REPEAT ERROR", error);
        console.log("response", response);

        if (error !== "") {
          if (error && error.message.includes("401")) {
            showToast("error", "Не верные данные");
          } else {
            showToast("error", error);
          }
        }
      } else {
        console.log(">>>>>>>>>", response.token);
        showToast("success", "You have successfully logged in");
        setCookie("token", response.token);
        console.log("LOGGED IN", loggedIn);

        login();
        navigate("/");
      }
    }, [response, error]); */
  /*   {
      console.log("LOGGED IN", loggedIn);
      console.log("respone", response);
    } */

  /*   const showToast = (type, text) => {
      if (type === "error") {
        toast.error(text ? text : error, {
          toastId: "error",
        });
      } else if (type === "success") {
        toast.success(text ? text : response, {
          toastId: "success",
        });
      }
    }; */
  const [token, setToken] = useState("");
  const [dataUser, setDataUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const startingValues = { email: "", password: "" };
  /*   const onClickCreateItem = () => {
      sendFileToIPFS(name, password);
    }; */
  return (
    <DivContainerFixedSC>
      <DivContainerSC>
        <DivRegSC>
          <DivBackgroundFormSC>
            <DivBoxBoxFormSC>
              <DivBoxFormSignInSC>
                <H4Title>Authorization</H4Title>

                <SpanSC>Fill out the form to log in</SpanSC>
                <Formik
                  initialValues={startingValues}
                  validationSchema={signInSchema}
                  initialErrors={startingValues}
                  onSubmit={(values) => {
                    console.log(values);
                    const apiUrl =
                      "https://catena-lbnvm6nhbq-uc.a.run.app/api/v1/user/signin";
                    const _startingValues = {
                      email: values.email,
                      password: values.password,
                    };
                    const headers = {
                      "Content-Type": "application/json",
                    };
                    axios
                      .post(apiUrl, JSON.stringify(_startingValues), {
                        headers: headers,
                      })
                      .then((resp) => {
                        setToken(resp.data.token);
                        dispatch({
                          type: "SET_IS_LOGIN",
                          status: true,
                        });
                        setDataUser(resp.data);
                        localStorage.setItem("xtoken", resp.data.token);
                        localStorage.setItem(
                          "userData",
                          JSON.stringify(resp.data)
                        );
                        toast('You are in!',{ icon: '👏'});
                        navigate("/");
                      })
                      .catch(() => toast('Oops!',{ icon: '👎'}))
                  }}
                >
                  {(formik) => (
                    <Form>
                      <DivBoxRowsSC>
                        <DivBoxSC>
                          {/*<LabelSC htmlFor="email">Email</LabelSC>*/}
                          <InputEmailSC
                            label="email"
                            type="email"
                            name="email"
                            fullSize={true}
                            placeholder={"Email"}
                          />
                        </DivBoxSC>

                        <DivBoxRowSISC>
                          {/*<LabelSC htmlFor="pass">Password</LabelSC>*/}
                          <InputEmailSC
                            label="password"
                            name="password"
                            type="password"
                            fullSize={true}
                            placeholder={"Password"}
                          />
                        </DivBoxRowSISC>
                        <DivTextBoxSISC>
                          <DivBoxInputCheckboxSC>
                            <CustomInputCheckBox />
                          </DivBoxInputCheckboxSC>
                          <SpanFirstSC to="#" onClick={check}>
                            Remember me
                          </SpanFirstSC>
                          <SpanSecondSC to="/">Forgot Password?</SpanSecondSC>
                        </DivTextBoxSISC>
                        <DivBoxRowSC>
                          <ButtonCustomSC
                            width={"100%"}
                            height={"61px"}
                            primary={true}
                            borderRadius={"50px"}
                            type="submit"

                            /*  onClick={onClickCreateItem}
                                                statusOpasity={!(password && name)}
                                                disable={!(password && name)} */
                          >
                            {/*                         {!loading ? (
                          <span>
                            Sign in&nbsp;&nbsp;
                            <FontAwesomeIcon
                              icon={faArrowRight}
                            ></FontAwesomeIcon>
                          </span>
                        ) : (
                          <FlowerLoaderSc />
                        )} */}
                            <DivTextButtonSC>Sign in</DivTextButtonSC>
                          </ButtonCustomSC>
                        </DivBoxRowSC>
                        <DivBoxRowSC>
                          <DivBoxTextSC>
                            <SpanQuSC>Don't have an account yet? </SpanQuSC>
                            <LinkSC to="/registration">Sign up</LinkSC>
                          </DivBoxTextSC>
                        </DivBoxRowSC>
                      </DivBoxRowsSC>
                    </Form>
                  )}
                </Formik>
              </DivBoxFormSignInSC>
            </DivBoxBoxFormSC>
          </DivBackgroundFormSC>
        </DivRegSC>
      </DivContainerSC>
    </DivContainerFixedSC>
  );
};

export default SignIn;
