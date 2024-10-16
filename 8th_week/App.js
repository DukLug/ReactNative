import { React, createContext, useState } from 'react';
import AppNavigator from './components/AppNavigator';
import ReactDOM from "react-dom/client";

export const UserContext = createContext();

const App = () => {
  const [userName, setUserName] = useState("Twinkle");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <AppNavigator />
    </UserContext.Provider>
  );
};

export default App;
