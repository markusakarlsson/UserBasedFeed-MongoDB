import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { Provider } from "./components/context";

class App extends React.Component {
  render() {
    return (
      <Provider value={this.state}>
          <div className="App">
            <MainPage />
          </div>
      </Provider>
    );
  }
}

export default App;
