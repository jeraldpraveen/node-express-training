const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=2de870cf5fdc6af6c32dd9e861bc58d8&query=11.1085,77.3411&units=f";

request({ url: url, json: true }, (errorr, response) => {
  const data = response.body.current;
  const testWork = `It is currently ${data.temperature} degrees out. But it feels like ${data.feelslike} degrees out.`;
  console.log(testWork);
});
