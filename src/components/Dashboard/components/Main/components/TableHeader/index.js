import styles from "./style.module.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { useState } from "react";
import { FloatingLabelInput } from "../FloatingLabelInput";

export function TableHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.table_header}>
      <>
        <button className={styles.add_btn} onClick={showModal}>
          + افزوردن کاربر
        </button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <FloatingLabelInput />
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
      <h3>لیست کاربران</h3>
    </div>
  );
}
