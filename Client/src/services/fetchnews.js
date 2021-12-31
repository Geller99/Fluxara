import axios from "axios";

export const handleFetch = async (array) => {
  return await Promise.all(
    array.map((choice) => {
      return axios
        .post(`http://localhost:3003/api/news`, {
          id: choice,
        })
        .then((data) => {
          console.log(data);
        });
    })
  );
};
