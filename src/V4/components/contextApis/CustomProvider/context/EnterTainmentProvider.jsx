import React, { createContext } from "react";

const defaultVal = {
    type: 'default',
    offering: ['default']
}

export const EntertainmentContext = createContext(defaultVal);

export const EnterTainmentProvider = ({ val, children }) => {
  return (
    <EntertainmentContext.Provider value={val}>
      {children}
    </EntertainmentContext.Provider>
  );
};
