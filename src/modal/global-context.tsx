import React, { useState } from "react";

interface Store {
  user: any;
  setUser: any;
}

export const store: Store = {
  user: undefined,
  setUser: undefined,
};

export const GlobalContext = React.createContext(store);

export function ContextWarper({ children }: any) {
  const [user, setUser] = useState(store.user);
  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
