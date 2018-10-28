import React from 'react';
const Previewer = (props) => {
    return (<div>
      <div className="row box-header" id="previewer-header">
          <div className="col-md-6">
            <h6>Previewer</h6>
          </div>
          <div className="col-md-6 icon">
            <i className="fa fa-expand-arrows-alt" id="previewer-button"
              onClick={() => props.func(event, props.altWindow, props.currentWindow)}></i>
          </div>
      </div>
      <div className="row">
        <div id="content">
        </div>
      </div>
    </div>);
  };

export default Previewer;
