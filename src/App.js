import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import ImageGrid from "./components/ImageGrid/ImageGrid";

import config from "./store"
const store = config();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <ImageGrid />
      </Provider>
    );
  }
}
export default App;
