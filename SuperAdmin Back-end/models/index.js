const mongoose = require("mongoose");

//  "mongodb+srv://admin:<password>@cluster0.9oejs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//  "mongodb://localhost:27017/sales"

mongoose
  .connect(
    "mongodb+srv://gokulast:Password123@cluster0.lzcnv.mongodb.net/eventdb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log("Error connecting to MongoDB @Model:", String(error)));

module.exports = {
  Event: require("./Event"),
  Registration: require("./Registration"),
  Blog: require("./Blog"),
  Ticket: require("./Ticket"),
};
