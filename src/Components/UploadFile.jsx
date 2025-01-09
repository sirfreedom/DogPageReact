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
    return { url: 'https://sirfreedom.somee.com/api/File', body }
  }

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === 'headers_received') 
    {
      toast(`${meta.name} uploaded!`)
      remove()
    } 
    if (status === 'aborted') 
    {
      toast(`${meta.name}, upload failed...`)
    }
  }

  return (
    <>

   <div>
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
    
    </div>
    </>
  );
};

export default UploadFile;

