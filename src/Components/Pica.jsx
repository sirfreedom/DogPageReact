// https://dev.to/wchr/compress-images-in-react-browser-image-compression-libary-3cja
import React, { useEffect, useState } from "react";
import ImageBlobReduce from "image-blob-reduce";
import prettyBytes from "pretty-bytes";

const resize = new ImageBlobReduce();

resize._create_blob = function (env) {
  return this.pica
    .toBlob(env.out_canvas, "image/jpeg", 0.9)
    .then(function (blob) {
      env.out_blob = blob;
      return env;
    });
};

function PicaImage({ file }) {
  const [newImage, setNewImage] = useState();

  const handleImage = (image) => {
    setNewImage(image);
  };

  useEffect(() => {
    if (file) {
      console.log("File received pica", file);
      try {
        resize.toBlob(file, { max: 1000 }).then((blob) =>
          handleImage({
            url: URL.createObjectURL(blob),
            size: blob.size,
            type: blob.type
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, [file]);

  if (!newImage) {
    return null;
  }

  return (
    <>
      <figure>{`${prettyBytes(newImage.size)} ${newImage.type}`}</figure>
      <img src={newImage.url} alt="" />
    </>
  );
}

export default PicaImage;
