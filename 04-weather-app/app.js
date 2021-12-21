const request = require("request");

const urlGeo =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Tiruppur.json?access_token=pk.eyJ1IjoiamVyYWxkcHJhdmVlbiIsImEiOiJja3hnZHU3NWIwc2llMnducHM5OHl1NnJrIn0.kOa9k9gwuG3uMaI6rIGkcQ";

const url =
  "http://api.weatherstack.com/current?access_key=2de870cf5fdc6af6c32dd9e861bc58d8&query=11.1085,77.3411&units=f";

request({ url: urlGeo, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather server");
  } else if (response.body.features.length === 0) {
    console.log("No such Location");
  } else {
    const data = response.body.features[0].center;
    const long = data[0];
    const lat = data[1];
    console.log(`Longitude = ${long} & Lattitude = ${lat}`);
  }
});

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather server");
  } else if (response.body.error) {
    console.log(response.body.error.info);
  } else {
    const data = response.body.current;
    const testWork = `It is currently ${data.temperature} degrees out. But it feels like ${data.feelslike} degrees out.`;
    console.log(testWork);
  }
});

// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       longitude: 0,
//       latitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geoCode("Tiruppur", (data) => {
//   console.log(data);
// });

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiamVyYWxkcHJhdmVlbiIsImEiOiJja3hnZHU3NWIwc2llMnducHM5OHl1NnJrIn0.kOa9k9gwuG3uMaI6rIGkcQ";

  request({ url: urlGeo, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather server", undefined);
    } else if (response.body.features.length === 0) {
      callback("No such Location", undefined);
    } else {
      callback(
        undefined,
        `Longitude = ${response.body.features[0].center[1]} & Lattitude = ${response.body.features[0].center[1]}`
      );
    }
  });
};

geoCode("Tiruppur", (error, response) => {
  console.log("Error", error);
  console.log("Data", response);
});
