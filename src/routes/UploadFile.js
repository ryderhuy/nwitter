import React, { useState } from "react";
import { authService, storage } from "fbase";
const UploadFile = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [url, setUrl] = useState("");
  const handleChange = (event) => {
    if (event.target.files[0]) {
      setFileUpload(event.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`WP/${fileUpload.name}`).put(fileUpload);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("WP")
          .child(fileUpload.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
    console.log("file", fileUpload);
  };
  return (
    <>
      <div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <a href={url}>{url}</a>
      </div>
    </>
  );
};
export default UploadFile;
