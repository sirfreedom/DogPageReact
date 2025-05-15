import React, {useState,useEffect} from 'react'
import {insertFile} from './Helpers'

class UploadFile extends React.Component {
  state = {
    file: null,
    base64URL: ""
  };

  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        //console.log("Called", reader);
        baseURL = reader.result;
        //console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  handleFileInputChange = e => 
  {
    //console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64(file)
      .then(result => {
        file["base64"] = result;
        //console.log("File Is", file);
        //console.log(result);
        insertFile(result);

        this.setState({
          base64URL: result,
          file
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0]
    });
  };

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={this.handleFileInputChange} />
      </div>
    );
  }
}
    
export default UploadFile;