import axios from "axios";
/*

This file handles geolocation API calls and any geocoding needed

*/

export const locationHandler = (setLocation, setCountry) => {
  let url = `http://localhost:3003/api/location`;
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
