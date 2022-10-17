import styles from "./style.module.css";
import "./tableHeader.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { useState } from "react";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCLient,
  editNewClient,
} from "../../../../../../store/newClient/newClient.action";
import Fuse from "fuse.js";
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


  const [filterClients, setFilterClients] = useState("");
  const [searchText, setSearchText] = useState("");
  const filterOptions = {
    isCaseSensitive: false,
    includeMatches: true,
    keys: ["firstName", "lastName", "location"],
  };
  const clients = useSelector((state) => state.client.clients);
  const fuse = new Fuse(clients, filterOptions);
  function handleSearch() {
    setFilterClients(fuse.search(searchText));
  }
  console.log(filterClients);


  return (
    <div className={styles.table_header}>
      <div className={styles.titleTableHeader}>
        <h3 className={styles.title}>لیست کاربران</h3>
      </div>
      <div className={styles.header_footer_style}>
        <button className={styles.add_btn} onClick={showModal}>
          + افزوردن کاربر
        </button>

        <div className={styles.searchInput_parent}>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type={"text"}
            className={styles.searchInput_style}
            placeholder="جست و جو.."
          />
          <button className={styles.optionStyle_button} onClick={handleSearch}>
            <i className={`bi bi-search ${styles.search_btn}`}></i>
          </button>
        </div>
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
            label="تاریخ تولد"
            placeholder="تاریخ تولد کابر را وارد کنید"
            value={newClient.birthdate}
            type="date"
            changeHandler={(value) =>
              handleOnChangeInputs({ birthdate: value })
            }
          />
          <FloatingLabelInput
            label="محل سکونت"
            placeholder="محل سکونت کاربر را وارد کنید"
            value={newClient.location}
            changeHandler={(value) => handleOnChangeInputs({ location: value })}
          />
        </Modal>
      </div>

    </div>
  );
}
