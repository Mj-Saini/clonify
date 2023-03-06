import React, { createContext, useState } from "react";
export const theTheme = createContext();
const Providers = ({ children }) => {
  const [theme, setTheme] = useState(0);

  return (
    <theTheme.Provider value={{ theme, setTheme }}>
      {children}
    </theTheme.Provider>
  );
};

export default Providers;
