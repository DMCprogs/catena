import React, { useEffect, useState, useContext, useReducer } from "react";
import GlobalDispatchContext from '../global_dispatch_context'
import reducer from '../reducer'

const RootBox = (props) => {
  const { children } = props;
  const initialState = useContext(GlobalDispatchContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <GlobalDispatchContext.Provider value={{ state, dispatch }}>
        <div>
            {children}
        </div>
      </GlobalDispatchContext.Provider>
  );
};

export default RootBox;
