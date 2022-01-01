import axios from "axios";
/*

This file handles geolocation API calls and any geocoding needed

*/

export const locationHandler = (setLocation, setCountry) => {
  let url = `https://fluxserver-fbqvi1vr1-geller99.vercel.app/api/location`;
  const response = axios
    .get(url)
    .then((data) => {
      console.log(data)
      setLocation(data.data.city);
      setCountry(data.data.country);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
    });

  return response;
};
