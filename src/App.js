import React from "react";
import Header from "./components/Header/Header";
import ImageGrid from './components/ImageGrid/ImageGrid'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ImageGrid />
      </div>
    );
  }
}

export default App;
