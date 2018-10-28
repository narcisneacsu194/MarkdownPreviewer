import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayPreview } from '../actions/index';

class Editor extends Component{

  constructor(props){
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.props.displayPreview(event.target.value);
  }

  render(){
    return (<div>
      <div className="row box-header" id="editor-header">
          <div className="col-md-6">
            <h6>Editor</h6>
          </div>
          <div className="col-md-6 icon">
            <i className="fa fa-expand-arrows-alt" id="editor-button"
              onClick={() => this.props.func(event, this.props.altWindow, this.props.currentWindow)}></i>
          </div>
      </div>
      <div className="row">
        <textarea rows={10} onChange={this.onInputChange}
          type="text" id="editor-textarea"></textarea>
      </div>
    </div>);
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ displayPreview }, dispatch);
}

export default connect(null, mapDispatchToProps)(Editor);
