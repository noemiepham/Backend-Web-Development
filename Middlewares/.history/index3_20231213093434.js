import express from "express";
const app = express();
const port = 3000;

/* const logger = (req, res, next) => {
  console.log("Resquest Method: ", req.method);
  console.log("Resquest Url: ", req.url);
  next();
}; */
app.use(logger);

app.get("/", (req, res) => {
  res.send("hello Quy");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
