import axios from "axios";

export const handleFetch = async (array) => {
  return await Promise.all(
    array.map((choice) => {
      return axios
        .post(`https://fluxserver-fbqvi1vr1-geller99.vercel.app/api/news`, {
          id: choice,
        })
        .then((data) => {
          console.log(data);
        });
    })
  );
};
