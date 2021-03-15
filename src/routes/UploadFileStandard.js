import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Space, Table, Upload } from "antd";
import { authService, database, firebaseInstance, storage } from "fbase";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const UploadFileStandard = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [checkUpload, setCheckUpload] = useState("");
  const props = {
    beforeUpload: (file) => {
      // if (file.type !== "application/haansofthwp" && !file.name.includes(".hwp")) {
      if (!file.name.includes(".hwp")) {
        message.error(`${file.name} is not a hwp file`);
      }
      // return file.type === "application/haansofthwp"
      return file.name.includes(".hwp")
        ? true
        : Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      setFileUpload(info.fileList[0]["originFileObj"]);
    },
  };
  const handleUpload = () => {
    const uploadTask = storage
      .ref("WP/StandardFile/" + fileUpload.name)
      .put(fileUpload);
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
          .ref("WP/StandardFile/")
          .child(fileUpload.name)
          .getDownloadURL()
          .then((url) => {
            setCheckUpload("Upload successfull!!!");
            const newID = database.ref().push().key;
            writeUserData(
              newID,
              url,
              fileUpload.name,
              true
            );
          });
      }
    );
  };
  const writeUserData = (ID, FileSrc, FileName, IsActive) => {
    firebaseInstance
      .database()
      .ref("wpdb/standard/" + ID)
      .set({
        FileSrc: FileSrc,
        FileName: FileName,
        InsertTime: format(new Date(), "yyyy/MM/dd kk:mm:ss"),
        IsActive: IsActive,
      });
  };
  const getUserName = (uid) => {
    const user = authService.getUser(uid);
    return user;
  };
  const [listURL, setListUrl] = useState();
  useEffect(() => {
    var starCountRef = database.ref("wpdb");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data != null) setListUrl(Object.values(data["standard"]));
    });
  }, []);

  const columns = [
    {
      title: "FileName",
      dataIndex: "FileName",
      key: "FileName",
      render: (text, record) => <span>{record.FileName}</span>,
    },
    {
      title: "InsertTime",
      dataIndex: "InsertTime",
      key: "InsertTime",
      render: (text, record) => <span>{record.InsertTime}</span>,
    },
    {
      title: "IsActive",
      dataIndex: "IsActive",
      key: "IsActive",
      render: (text, record) => (
        <span>{record.IsActive ? "Active" : "In Active"}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
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
      </div>
    </>
  );
};
export default UploadFileStandard;
