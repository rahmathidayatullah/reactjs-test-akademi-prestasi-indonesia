/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const Context = createContext(null);

function Provider({ children }) {
  const [reload, setReload] = useState(false);

  const changeReload = () => {
    setReload(!reload);
  };

  return <Context.Provider value={{ reload, changeReload }}>{children}</Context.Provider>;
}

export { Context, Provider };
