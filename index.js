import express, { request } from "express";
import axios from "axios";
import pug from "pug";
import bodyParser from "body-parser";
import session from "express-session";
//import request from "request";

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = "https://api.coinpaprika.com/v1/tickers";

app.get("/", (req, res) => {
  request.get(url, function(error, response, html) {
    console.log(html);
    // const obj = JSON.parse(html);
    // console.log(obj[1]);
  });
  // res.render("index.pug", { coin });
});

const handleStart = () => {
  console.log("connected !");
};

app.listen(3000, handleStart);
