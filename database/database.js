import { Mongoose } from "mongoose";

Mongoose.connect(
  "mongodb+srv://forpride:Forpride2022@forpride.v0owt.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Conectado com sucesso!");
    }
  }
);

export { Mongoose };
