// https://dev.to/wchr/compress-images-in-react-browser-image-compression-libary-3cja
import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import prettyBytes from "pretty-bytes";
import {insertFile} from './Helpers'


/*
Resizer.imageFileResizer(
  file, // Is the file of the image which will resized.
  maxWidth, // Is the maxWidth of the resized new image.
  maxHeight, // Is the maxHeight of the resized new image.
  compressFormat, // Is the compressFormat of the resized new image.
  quality, // Is the quality of the resized new image.
  rotation, // Is the degree of clockwise rotation to apply to uploaded image.
  responseUriFunc, // Is the callBack function of the resized new image URI.
  outputType, // Is the output type of the resized new image.
  minWidth, // Is the minWidth of the resized new image.
  minHeight // Is the minHeight of the resized new image.
);

*/


function ImageResizer({ title, description, file }) {
  const [newImage, setNewImage] = useState();



  useEffect(() => {
  
    if (file) 
      {
      
      try {
        Resizer.imageFileResizer(
          file,
          480,
          480,
          "JPEG",
          50,
          0,
          //  (blob) => {
           // handleImage({
           //   url: URL.createObjectURL(blob),
           //   size: blob.size,
           //   type: blob.type
            //});
          (uri) => 
          {
              insertFile(uri);
              //console.log(uri);
              //setImgtext(uri);
          },
          "base64",
          100,
          100
        );

      } catch (err) {
        console.log(err);
      }
    }
  }, [file]);

  if (!newImage) {
    return <></>;
  }

  return (
    <>
      <figure>{`${prettyBytes(newImage.size)} ${newImage.type}`}</figure>
      <img src={newImage} alt="" style={{ maxWidth: "100%" }} />
    </>
  );
}

export default ImageResizer;
