import styles from "./style.module.css";
import "./tableHeader.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { useContext, useState } from "react";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { SidebarContext } from "../../../../../../context/sidebarContext";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCLient,
  editNewClient,
} from "../../../../../../store/newClient/newClient.action";
import { addClient } from "../../../../../../store/clients/clients.action";

export function TableHeader() {
  const newClient = useSelector((state) => state.newClient);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(addClient(newClient));
    dispatch(clearCLient());
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(clearCLient());
  };

  const handleOnChangeInputs = (payload) => {
    dispatch(editNewClient(payload));
  };
  return (
    <div className={styles.table_header}>
      <>
        <button className={styles.add_btn} onClick={showModal}>
          + افزوردن کاربر
        </button>
        <Modal
          style={{ top: 20 }}
          title="اطلاعات کاربر"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="ثبت"
          cancelText="انصراف"
        >
          <FloatingLabelInput
            label="نام"
            placeholder="نام را وارد کنید"
            value={newClient.firstName}
            changeHandler={(value) =>
              handleOnChangeInputs({ firstName: value })
            }
          />
          <FloatingLabelInput
            label="نام خانوادگی"
            placeholder="نام خانوادگی را وارد کنید"
            value={newClient.lastName}
            changeHandler={(value) => handleOnChangeInputs({ lastName: value })}
          />
          <FloatingLabelInput
            label="قد"
            placeholder="قد کابر را وارد کنید"
            value={newClient.height}
            type="number"
            changeHandler={(value) => handleOnChangeInputs({ height: value })}
          />
          <FloatingLabelInput
            label="محل سکونت"
            placeholder="محل سکونت کاربر را وارد کنید"
            value={newClient.location}
            changeHandler={(value) => handleOnChangeInputs({ location: value })}
          />
        </Modal>
      </>
      <h4 className={styles.title}>لیست کاربران</h4>
    </div>
  );
}
