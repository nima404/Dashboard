import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addClient,
  deleteClient,
  editClient,
  setClients,
} from "../../store/clients/clients.action";
import { calculateAge } from "../../store/clients/clients.reducer";

export const useFetch = () => {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const getData = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        // setData(response.data);
        dispatch(setClients(response.data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const deleteData = (url, id) => {
    setLoading(true);
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        // setData(response.data);
        dispatch(deleteClient(id));
      })
      .catch((err) => {
        throw new Error(err.messge);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addData = (url, body) => {
    setLoading(true);
    const age = calculateAge(body.birthday);
    axios({
      method: "post",
      url: url,
      data: { ...body, age },
    })
      .then((response) => {
        // setData(response.data);
        dispatch(addClient(response.data));
      })
      .catch((err) => {
        throw new Error(err.messge);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const updateData = (url, id, body) => {
    setLoading(true);
    const age = calculateAge(body.birthday);
    axios({
      method: "put",
      url: `${url}/${id}`,
      data: { ...body, age },
    })
      .then((response) => {
        // setData(response.data);
        dispatch(editClient(response.data));
      })
      .catch((err) => {
        throw new Error(err.messge);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, error, getData, deleteData, addData, updateData };
};
