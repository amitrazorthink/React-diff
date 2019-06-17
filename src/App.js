import './App.css';
import React, { Component } from "react";
import { diff as DiffEditor } from 'react-ace';
import 'brace/theme/github'; // this is needed as the default theme
import "brace/mode/javascript";
const defaultValue = [
  `[
    {
      "_index": "graylog_123",
      "_type": "message",
      "_id": "efd4cc70-8dad-11e9-9201-0242ac150004",
      "_score": 2.5802288,
      "_source": {
        "app": "admin",
        "library_file_id": "0cd18a81-3e9e-4ccc-af4c-98ed4a4dac13",
        "gl2_remote_ip": "192.168.60.41",
        "gl2_remote_port": 44178,
        "streams": [
          "000000000000000000000001"
        ],
        "log_level": "INFO",
        "source": "local",
        "message": "Errors in installation",
        "gl2_source_input": "5cff401ac41479000e17f9fd",
        "log_type": "INFO",
        "method_name": "installPythonPackage",
        "line_number": 70,
        "library_detail_id": "da0154b3-f763-4516-8e52-5257e1eeb3eb",
        "gl2_source_node": "e0c0fb09-fabc-4c6e-835a-169c9b0a9473",
        "class_name": "com.razorthink.bigbrain.util.PythonPackageInstallationUtil",
        "timestamp": "2019-06-13 07:36:20.405"
        "log_level1": "INFO1",
      }
    }]`,
  `[
    {
      "_index": "graylog_0",
      "_type": "message",
      "_id": "efd4cc70-8dad-11e9-9201-0242ac150004",
      "_score": 2.5802288,
      "_source": {
        "app": "admin",
        "library_file_id": "0cd18a81-3e9e-4ccc-af4c-98ed4a4dac13",
        "gl2_remote_ip": "192.168.60.41",
        "gl2_remote_port": 44178,
        "streams": [
          "000000000000000000000001"
        ],
        "source": "local",
        "message": "Errors in installation",
        "gl2_source_input": "5cff401ac41479000e17f9fd",
        "log_type": "INFO",
        "method_name": "installPythonPackage",
        "line_number": 70,
        "library_detail_id": "da0154b3-f763-4516-8e52-5257e1eeb3eb",
        "gl2_source_node": "e0c0fb09-fabc-4c6e-835a-169c9b0a9473",
        "class_name": "com.razorthink.bigbrain.util.PythonPackageInstallationUtil",
        "timestamp": "2019-06-13 07:36:20.405"
      }
    }]
`
];
// require(`brace/mode/javascript`);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      fontSize: 14,
      markers: {},
      mode: "javascript"
    };
    this.onChange = this.onChange.bind(this);
    this.setMode = this.setMode.bind(this);
  }

  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  setMode(e) {
    this.setState({
      mode: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
            <DiffEditor
            value={this.state.value}
            height="1000px"
            width="1000px"
            mode={this.state.mode}
            onChange={this.onChange}
            theme = 'github'
            highlightActiveLine = {true}
          />
        </div>
      </div>
    );
  }
}

export default App;
