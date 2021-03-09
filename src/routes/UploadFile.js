import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Space, Table, Upload, Select } from "antd";
import { authService, database, firebaseInstance, storage } from "fbase";
import React, { useEffect, useState } from "react";
import moment from "moment";

const UploadFile = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [checkUpload, setCheckUpload] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [refWP, setRefWP] = useState("WP/");
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
    if (isAdmin) {
      setRefWP("WP/StandardFile/");
    } else {
      setRefWP("WP/");
    }
    const uploadTask = storage.ref(refWP + fileUpload.name).put(fileUpload);
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
          .ref(refWP)
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
              "<b>File is processing</b>",
              false
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
    if (isAdmin) {
      firebaseInstance
        .database()
        .ref("wpdb/Standard/" + ID)
        .set({
          FileSrc: FileSrc,
          FileName: FileSrcName,
          InsertDateTime: moment.defaultFormat("YYY-MM-DD hh:mm:ss"),
          IsActive: true,
        });
    } else {
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
          InsertDateTime: moment.defaultFormat("YYY-MM-DD hh:mm:ss"),
        });
    }
  };

  const [listURL, setListUrl] = useState();
  const [htmlResult, setHtmlResult] = useState("");
  const showHTML = () => {};
  // useEffect(() => {
  //   var starCountRef = database.ref("wpdb/");
  //   starCountRef.on("value", (snapshot) => {
  //     const data = snapshot.val();
  //     setListUrl(Object.values(data[authService.currentUser.uid]));
  //   });
  // }, []);
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
  const { Option } = Select;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <div className="upload-page">
        <div className="upload-area">
          <Upload {...props} maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload hwp only</Button>
          </Upload>
          <Button onClick={handleUpload}>Upload</Button>
          <Select
            className="select-file"
            mode="tags"
            placeholder="Choose standard file"
            onChange={onChange}
          >
            {children}
          </Select>
          ,<span>{checkUpload}</span>,
        </div>
        <Table columns={columns} dataSource={listURL} />

        <div dangerouslySetInnerHTML={{ __html: htmlResult }} />
      </div>
    </>
  );
};
export default UploadFile;
