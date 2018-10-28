import React, { Component } from 'react';
import Editor from './editor';
import Previewer from './previewer';
export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      showAltWindow: true
    };

    this.changeWindowSize = this.changeWindowSize.bind(this);
  }

  changeWindowSize(event, altWindowId, currentWindow){
    if(this.state.showAltWindow){
      document.getElementById(altWindowId).setAttribute('style', 'display: none');
      const currentElem = document.getElementById(currentWindow);
      currentElem.setAttribute('style', 'width: 100%;');
      console.log("Current element: ", currentElem);
      this.setState({
        showAltWindow: false
      });
    }else{
      document.getElementById(altWindowId).setAttribute('style', 'display: block');
      this.setState({
        showAltWindow: true
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row" id="editor-div">
          <Editor func={this.changeWindowSize} altWindow="previewer-div" currentWindow="editor-header"/>
        </div>
        <div className="row" id="previewer-div">
          <Previewer func={this.changeWindowSize} altWindow="editor-div" currentWindow="previewer-header"/>
        </div>
      </div>
    );
  }
}
