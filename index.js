import express from "express";
import axios from "axios";
import pug from "pug";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const { data: geoLocation } = await axios.get("http://ip-api.com/json/");
    console.log("I received information !");
    res.render("index.pug", { lesa: geoLocation, page: "hi" });
  } catch (error) {
    console.log(" E R R O R!");
  }
  //   res.json(geoLocation);
});

const handleStart = () => {
  console.log("connected !");
};

app.listen(3000, handleStart);
