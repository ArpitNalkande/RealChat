const mongoose = require("mongoose");

const url =
  "mongodb+srv://arpitn1603:jMcFtjdw52rp4OFc@cluster0.gw5dymp.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));
