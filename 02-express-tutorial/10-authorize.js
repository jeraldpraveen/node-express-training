const authorize = (req, res, next) => {
  console.log("authorize");
  const { user } = req.query;
  if (user === "jerald") {
    req.jerald = { name: "Jerald Praveen", id: 427 };
    next();
  } else {
    res.status(401).send("Unauthorized User");
  }
};

module.exports = authorize;
