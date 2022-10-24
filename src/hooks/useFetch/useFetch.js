import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const deleteClient = (url) => {
    setLoading(true);
    axios
      .delete(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        throw new Error(err.messge);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, getData, deleteClient };
};
