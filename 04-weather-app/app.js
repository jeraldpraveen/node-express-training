const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=2de870cf5fdc6af6c32dd9e861bc58d8&query=11.1085,77.3411";

request({ url: url }, (errorr, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
