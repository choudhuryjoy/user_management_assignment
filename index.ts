import express from "express";
import userRoute from './routes/route'

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

