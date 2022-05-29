import { app } from "./server";
import connectDB from "./db/db";
import { PORT } from "./config/config";

connectDB();

app.listen(PORT, () => {
  console.log("server o port :", PORT);
});
