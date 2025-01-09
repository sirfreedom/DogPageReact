import React, { useState }  from 'react';
import ImageResizer from "./ImageResizer";
import PicaImage from "./Pica";


const UploadCompress = () => {

    const [file, setFile] = useState();

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFile(file);
      }
    };

return (
<>

  <div>
      <h1>Clientside image resize</h1>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <div>

        <div>
          <h4>react-image-file-resizer</h4>
          <ImageResizer file={file} />
        </div>
        
        <div>
          <h4>image-blob-reduce</h4>
          <PicaImage file={file} />
        </div>


      </div>
    </div>

</>
);
}

export default UploadCompress
