const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Tiruppur", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(11.1085, 77.3411, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
