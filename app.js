const express = require("express");
const AWS = require("aws-sdk");
const app = express();
const port = 8008;

app.get("/", (req, res) => {
  var meta = new AWS.MetadataService();

  meta.request("/latest/meta-data/instance-id", function (err, data) {
    res.send(
      "<h1>Node Demo App</h1> <h4>Message: Success</h4> <p>Version 1.3</p> <br /> " +
        data
    );
  });
});

app.get("/products", (req, res) => {
  res.send([
    {
      productId: "101",
      price: 100,
    },
    {
      productId: "102",
      price: 150,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port: ${port}`);
});
