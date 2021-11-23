import axios from 'axios';
import {useState} from 'react';
const API = 'http://localhost:8080';
export default ({url, method, body, onSuccess}) => {
  const [errors, setErros] = useState(null);

  const doRequest = async () => {
    try {
      setErros(null);
      const response = await axios[method](API + url, body);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setErros(
        <div className="bg-red-200">
          <h4>OOps .......</h4>
          <ul>
            {err.response.data.data.map(err => {
              return (
                <li key={err.msg}>
                  {err.param}: :{err.msg}
                </li>
              );
            })}
          </ul>
        </div>,
      );
      //   throw err;
    }
  };
  return {doRequest, errors};
};
