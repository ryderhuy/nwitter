import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Space, Table, Upload } from "antd";
import { authService, database, firebaseInstance, storage } from "fbase";
import React, { useEffect, useState } from "react";

const UploadFile = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [checkUpload, setCheckUpload] = useState("");
  const props = {
    beforeUpload: (file) => {
      if (file.type !== "application/haansofthwp") {
        message.error(`${file.name} is not a hwp file`);
      }
      return file.type === "application/haansofthwp"
        ? true
        : Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      setFileUpload(info.fileList[0]["originFileObj"]);
    },
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`WP/` + fileUpload.name).put(fileUpload);
    setCheckUpload("Uploading....");
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        setCheckUpload(error.message);
      },
      () => {
        storage
          .ref("WP")
          .child(fileUpload.name)
          .getDownloadURL()
          .then((url) => {
            setCheckUpload("Upload successfull!!!");
            const newID = database.ref().push().key;
            writeUserData(
              authService.currentUser.uid,
              newID,
              "dest",
              "dest name",
              url,
              fileUpload.name,
              "<b>aaa</b>",
              true
            );
          });
      }
    );
  };
  const writeUserData = (
    UserID,
    ID,
    FileDest,
    FileDestName,
    FileSrc,
    FileSrcName,
    HtmlResult,
    IsComplete
  ) => {
    firebaseInstance
      .database()
      .ref("wpdb/" + UserID + "/" + ID)
      .set({
        FileDest: FileDest,
        FileDestName: FileDestName,
        FileSrc: FileSrc,
        FileSrcName: FileSrcName,
        HtmlResult: HtmlResult,
        IsComplete: IsComplete,
      });
  };
  const [listURL, setListUrl] = useState();
  const [htmlResult, setHtmlResult] = useState("");
  const showHTML = () => {};
  useEffect(() => {
    var starCountRef = database.ref("wpdb/");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setListUrl(Object.values(data[authService.currentUser.uid]));
    });
  }, []);
  useEffect(() => {
    var starCountRef = database.ref("wpdb/");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setListUrl(Object.values(data[authService.currentUser.uid]));
    });
  }, []);
  const createMarkup = (htmlResult) => {
    setHtmlResult(htmlResult.HtmlResult);
  };
  const columns = [
    {
      title: "FileSrcName",
      dataIndex: "FileDestName",
      key: "FileSrcName",
      render: (text, record) => <span>{record.FileSrcName}</span>,
    },
    {
      title: "FileDestName",
      dataIndex: "FileDestName",
      key: "FileDestName",
      render: (text, record) => <span>{record.FileDestName}</span>,
    },
    {
      title: "IsComplete",
      dataIndex: "IsComplete",
      key: "IsComplete",
      render: (text, record) => (
        <span>{record.IsComplete ? "Completed" : "Running"}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => createMarkup(record)}>Show HTML Result</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="upload-page">
        <div className="upload-area">
          <Upload {...props} maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload hwp only</Button>
          </Upload>
          <Button onClick={handleUpload}>Upload</Button>
          <span>{checkUpload}</span>
        </div>
        <Table columns={columns} dataSource={listURL} />

        <div dangerouslySetInnerHTML={{ __html: htmlResult }} />
      </div>
    </>
  );
};
export default UploadFile;
