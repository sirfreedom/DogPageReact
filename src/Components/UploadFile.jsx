//import React, { useState} from 'react';
import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'


const UploadFile = () => 
{
  





  const toast = (innerHTML) => {
    const el = document.getElementById('toast')
    el.innerHTML = innerHTML
    el.className = 'show'
    setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
  }


  const getUploadParams = ({ file }) => {
    const body = new FormData()
    body.append('file', file)
    return { url: 'https://localhost:54044/api/Quini/Upload', body }
  }

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === 'headers_received') {
      toast(`${meta.name} uploaded!`)
      remove()
    } else if (status === 'aborted') {
      toast(`${meta.name}, upload failed...`)
    }
  }


/*
    const getUploadParams = ({ file, meta }) => {
      const body = new FormData()
      body.append('file', file)
      //return { url: 'https://www.hollidaypay.gearhostpreview.com/Home/Upload', body }

      return { url: 'http://localhost:32312/Home/Upload', body }
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }
*/

  return (
    <div>
      <a>
      Manzana 
      </a>
      
      <React.Fragment>
      <div id="toast">Upload</div>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        inputContent="Suba una imagen"
        styles={{
          dropzone: { width: 400, height: 200 },
          dropzoneActive: { borderColor: 'green' },
        }}
      />
    </React.Fragment>
    </div>
  );
};

export default UploadFile;

