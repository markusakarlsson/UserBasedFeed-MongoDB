import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { Provider } from "./components/context";
import { MyPostsProvider } from "./components/contextMyPosts";

class App extends React.Component {
  render() {
    return (
      <Provider value={this.state}>
        <MyPostsProvider value={this.state}>
          <div className="App">
            <MainPage />
          </div>
          </MyPostsProvider>
      </Provider>
    );
  }
}

export default App;
