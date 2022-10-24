import styles from "./style.module.css";
import "./tableHeader.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { useDispatch, useSelector } from "react-redux";
import Fuse from "fuse.js";
import { setFiltered } from "../../../../../../store/clients/clients.action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../../../../../context/themeContext";
import { useFetch } from "../../../../../../hooks/useFetch/useFetch";
export function TableHeader() {
  const { theme } = useContext(ThemeContext);
  const initialNewClient = {
    name: "",
    family: "",
    age: "",
    height: "",
    birthday: "",
    location: "",
  };
  const [newClient, setNewClient] = useState(initialNewClient);
  const clients = useSelector((state) => state.client.clients);
  const { addData } = useFetch();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const floatInputData = [
    { label: "نام", type: "text", item: "name", required: true },
    { label: "نام خانوادگی", type: "text", item: "family", required: true },
    { label: "قد", type: "number", item: "height" },
    { label: "تاریخ تولد", type: "date", item: "birthday" },
    { label: "محل سکونت", type: "text", item: "location" },
  ];
  const [searchText, setSearchText] = useState("");

  const filterOptions = {
    isCaseSensitive: false,
    includeMatches: true,
    keys: ["name", "family", "location"],
  };

  const fuse = new Fuse(clients, filterOptions);
  const showModal = () => {
    setIsModalOpen(true);
    setNewClient(initialNewClient);
  };
  const error = (error) => {
    Modal.error({
      title: error,
    });
  };
  const handleOk = () => {
    const emptyRequired = floatInputData.find(
      (data) => data.required && newClient[data.item] === ""
    );
    if (emptyRequired === undefined) {
      // dispatch(addClient(newClient));
      addData("http://localhost:5000", newClient);
      setNewClient(initialNewClient);
      setIsModalOpen(false);
      AddUser();
    } else {
      error(`وارد کردن ${emptyRequired.label} الزامی است`);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOnChangeInputs = (property) => {
    setNewClient((prev) => {
      return { ...prev, ...property };
    });
  };

  useEffect(() => {
    let newFilteredList;
    if (searchText) {
      newFilteredList = fuse.search(searchText).map((node) => node.item);
    } else {
      newFilteredList = clients;
    }
    dispatch(setFiltered(newFilteredList));
  }, [searchText]);

  const AddUser = () =>
    toast.success("کاربر با موفقیت اضافه شد", {
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
        <div
          className={`${styles.searchInput_parent} ${
            theme === "dark" && styles.searchInput_parent_dark
          }`}
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type={"text"}
            className={styles.searchInput_style}
            placeholder="جست و جو.."
          />
        </div>
        <div className={styles.add_btn_parent}>
          <button
            className={`${styles.add_btn} ${
              theme === "dark" && styles.add_btn_dark
            }`}
            onClick={showModal}
          >
            + افزوردن کاربر
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
          maskStyle={{ opacity: 1 }}
        >
          {floatInputData.map(({ label, type, item, required }) => (
            <FloatingLabelInput
              required={required}
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
    </div>
  );
}
