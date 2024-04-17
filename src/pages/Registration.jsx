import React, { useState, useEffect, useContext } from "react";
//import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "axios";
//import { useCookies } from "react-cookie";
import GlobalDispatchContext from "../global_dispatch_context";

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
  InputRegSC,
  InputEmailSC,
  DivBoxRowSISC,
} from "../styled-components-css/styles.registration";
//import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import { registerSchema } from "../components/validations/validation.signup";
import { Formik, Form } from "formik";
//import TextField from "../components/TextField";
//import { toast } from "react-toastify";
//import { FlowerLoaderSc } from "../styled-components-css/styles.loader";
import { useNavigate } from "react-router";
import {
  DivIconRightArrowSC,
  InputTextSC,
} from "../styled-components-css/styled.AddAnHeir";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import {
  DivColumnContentButtonSC,
  DivTextButtonSC,
} from "../styled-components-css/styled.giftbox";
import {
  DivContainerFixedSC,
  DivContainerSC,
} from "../styled-components-css/styled.DEFAULT";
// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });



const Registration = ({login}) => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const {isLogin } = state;


  //const [response, error, loading, axiosFetch] = useAxiosFunction();
 // console.log("login", login);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

    const [password, setPassword] = useState(null);
    const [token, setToken] = useState('');
    const [dataUser, setDataUser] = useState(null);
    const [name, setName] = useState(null);

  let navigate = useNavigate();
  /*   useEffect ( () => {
    if (response.length === 0) {
      if (error) {
        if (error.message.includes("401")) {
          showToast("error", "Не верные данные");
        } else {
          showToast("error", error);
        }
      }
    } else {
      console.log(">>>>>>>>>", response.token);
      showToast("success", "you have successfully signed up");
      setCookie("token", response.token);
      setOpen(true);
      navigate("/");
    }
  }, [response, error]); */

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
  };
 */
  const onChange = (status, e) => {
    const regexp = /[A-zА-я]/g;
    const regexp2 = /[\[\]\)\(\{\}\\']+/g;

    let _values = values;

    let arrayCherecters = e.target.value.replace(regexp2, "").match(regexp);
    values[status] = arrayCherecters.join("");
    setValues({ ..._values });
  };


    const startingValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };
    /*   const onClickCreateItem = () => {
      sendFileToIPFS(name, password);
    }; */
    return (
        <DivContainerFixedSC>
            <DivContainerSC>
                <DivRegSC>
                    <DivBackgroundFormSC>
                        <DivBoxBoxFormSC>
                            <DivBoxFormSC>
                                <H4Title>Create account</H4Title>
                                <SpanSC>Fill out the form to register</SpanSC>
                                <Formik
                                    initialValues={startingValues}
                                    validationSchema={registerSchema}
                                    initialErrors={startingValues}
                                    onSubmit={(values2) => {
                                        console.log(values2)
                                        const apiUrl = 'https://catena-lbnvm6nhbq-uc.a.run.app/api/v1/user/registration';
                                        const _startingValues = {
                                            firstName: values2.firstName,
                                            lastName:  values2.lastName,
                                            email:  values2.email,
                                            password:  values2.password,
                                            passwordConfirm:  values2.passwordConfirm,
                                        };

                                        const headers = {
                                            'Content-Type': 'application/json'
                                        }

                                        axios.post(apiUrl, JSON.stringify(_startingValues), {headers:headers}).then((resp) => {

                                            setToken(resp.data.token)
                                            dispatch({
                                              type: "SET_IS_LOGIN",
                                              status: true,
                                            })
                                            setDataUser(resp.data)
                                            navigate("/");

                                            localStorage.setItem("xtoken", resp.data.token);
                                            localStorage.setItem("userData", JSON.stringify(resp.data));

                                        });

                                    }}
                                    validator={() => ({})}
                                >
                                    {(formik) => (
                                        <Form

                                        >
                                            <DivBoxRowsSC>
                                                <DivBoxColumnsSC>
                                                    <DivBoxSC>
                                                        {/*<LabelSC htmlFor="name">Name</LabelSC>*/}
                                                        <InputRegSC
                                                            label="firstName"
                                                            type="text"
                                                            name="firstName"
                                                            fullSize={false}
                                                            placeholder={"Name"}
                                                            // onChange={onChange}
                                                            // values={values}
                                                        />
                                                    </DivBoxSC>
                                                    <DivBoxSC>
                                                        {/*<LabelSC htmlFor="lastName">Surname</LabelSC>*/}
                                                        <InputRegSC
                                                            label="lastName"
                                                            type="text"
                                                            name="lastName"
                                                            fullsize={false}
                                                            placeholder={"Surname"}
                                                            // onChange={onChange}
                                                            // values={values}
                                                        />
                                                    </DivBoxSC>
                                                </DivBoxColumnsSC>
                                                <DivBoxSC>
                                                    {/*<LabelSC htmlFor="email">Email</LabelSC>*/}
                                                    <InputEmailSC
                                                        label="email"
                                                        type="email"
                                                        name="email"
                                                        fullsize={true}
                                                        placeholder={"Email"}
                                                    />
                                                </DivBoxSC>
                                                <DivBoxColumnsSC>
                                                    <DivBoxSC>
                                                        {/*<LabelSC htmlFor="pass">Password</LabelSC>*/}
                                                        <InputRegSC
                                                            label="password"
                                                            type="password"
                                                            name="password"
                                                            fullsize={false}
                                                            placeholder={"Password"}
                                                        />
                                                    </DivBoxSC>
                                                    <DivBoxSC>
                                                        {/*<LabelSC htmlFor="confirmedPass">Confirm password</LabelSC>*/}
                                                        <InputRegSC
                                                            label="passwordConfirm"
                                                            type="password"
                                                            name="passwordConfirm"
                                                            fullsize={false}
                                                            placeholder={"Confirm password"}
                                                        />
                                                    </DivBoxSC>
                                                </DivBoxColumnsSC>
                                                <DivBoxRowSC>
                                                    <ButtonCustomSC
                                                        primary={true}
                                                        width={"100%"}
                                                        height={"61px"}
                                                        borderRadius={"50px"}
                                                        type="submit"
                                                    >
                                                        <DivColumnContentButtonSC>
                                                            <DivTextButtonSC>Continue</DivTextButtonSC>
                                                            <DivIconRightArrowSC />
                                                        </DivColumnContentButtonSC>

                                                    </ButtonCustomSC>

                                                </DivBoxRowSC>
                                                <DivBoxRowSC>
                                                    <DivBoxTextSC>
                                                        <SpanQuSC>Already have an account? </SpanQuSC>
                                                        <LinkSC to="/signin">Sign in</LinkSC>
                                                    </DivBoxTextSC>
                                                </DivBoxRowSC>
                                            </DivBoxRowsSC>
                                        </Form>
                                    )}
                                </Formik>
                            </DivBoxFormSC>
                        </DivBoxBoxFormSC>
                    </DivBackgroundFormSC>
                </DivRegSC>
            </DivContainerSC>
        </DivContainerFixedSC>
    );
};

export default Registration;
