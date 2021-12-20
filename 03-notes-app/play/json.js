const body = {
  title: "Half Girlfriend",
  author: "chetan bhagat",
};

const bookJSON = JSON.stringify(body);
console.log(bookJSON);

const parseJSON = JSON.parse(bookJSON);
console.log(parseJSON);
