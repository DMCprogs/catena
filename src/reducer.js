const setIsHome = (state, action) => {
  const { status } = action;

  return {
    ...state,
    isHome: status,
  };
};

const setShowCatalog = (state, action) => {
  const { status } = action;

  return {
    ...state,
    showCatalog: status,
  };
};

const setIsOpen = (state, action) => {
  const { status } = action;

  return {
    ...state,
    isOpen: status,
  };
};

const setIsWhiteHeader = (state, action) => {
  const { status } = action;

  return {
    ...state,
    isWhiteHeader: status,
  };
};

const setModalData = (state, action) => {
  const { status } = action;

  return {
    ...state,
    modalData: {
      inputs: [],
      button: status,
    },
  };
};

const setIsCookie = (state, action) => {
  const { status } = action;

  return {
    ...state,
    isCookie: status,
  };
};
const setIsLogin = (state, action) => {
  const { status } = action;

  return {
    ...state,
    isLogin: status,
  };
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_IS_HOME":
      return setIsHome(state, action);
    case "SET_SHOW_CATALOG":
      return setShowCatalog(state, action);
    case "SET_IS_WHITE_HEADER":
      return setIsWhiteHeader(state, action);
    case "SET_IS_OPEN":
      return setIsOpen(state, action);
      case "SET_IS_COOKIE":
      return setIsCookie(state, action);
    case "SET_MODAL_DATA":
      return setModalData(state, action);
      case "SET_IS_LOGIN":
      return setIsLogin(state, action);
    default:
      throw new Error();
  }
}

export default reducer;
