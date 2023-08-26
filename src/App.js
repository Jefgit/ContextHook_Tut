import React from "react";
import ComponentC from "./components/ComponentC";
import "./styles.css";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"jeff"}>
        <ChannelContext.Provider value={"TV 5"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
