import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { Provider } from "./components/context";



function App() {
  return (
    <Provider>
    <div className="App">
      <MainPage />
    </div>
    </Provider>
  );
}

export default App;
