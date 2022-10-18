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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function TableHeader() {
  const newClient = useSelector((state) => state.newClient);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const floatInputData = [
    { label: "نام", type: "text", item: "firstName" },
    { label: "نام خانوادگی", type: "text", item: "lastName" },
    { label: "قد", type: "number", item: "height" },
    { label: "تاریخ تولد", type: "date", item: "birthdate" },
    { label: "محل سکونت", type: "text", item: "location" },
  ];

  const showModal = () => {
    setIsModalOpen(true);
    dispatch(clearCLient());
  };
  const handleOk = () => {
    dispatch(addClient(newClient));
    dispatch(clearCLient());
    setIsModalOpen(false);
    AddUser()
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

  const AddUser = () =>
    toast.success('کاربر با موفقیت اضافه شد', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });



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
          {floatInputData.map(({ label, type, item }) => (
            <FloatingLabelInput
              key={`${label}_float`}
              label={label}
              placeholder={`${label} را وارد کنید`}
              value={newClient[item]}
              changeHandler={(value) => handleOnChangeInputs({ [item]: value })}
              type={type}
            />
          ))}
        </Modal>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
