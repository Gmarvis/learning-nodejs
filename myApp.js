let express = require("express");
let dotenv = require('dotenv')
dotenv.config()
let app = express();
// callbacks
let rootCallback = (req, res) => {
  res.json({ 'hello': "wellcome to Express" });
};

let postCallBack = (req, res) => {
  res.json({ 'hello': "this is a post request" });
};

let updateCallBack = (req, res) => {
  res.json({ 'hi': "this is the post to be deleted" });
};

let serlveIndex = (req, res) => {
  let pathToFIle = __dirname + "/views/index.html";
  res.sendFile(pathToFIle);
};
let staticDir = __dirname + '/public'
// middlewares
app.use('/public', express.static(staticDir))

// reply with text

let sendText = (req, res) => {
  res.send({"hello": "we are good with epress"})
}

let sendJson = (req, res) => {
  let jsonObject
  if(process.env.MESSAGE_STYLE == "uppercase") {
    jsonObject = {'message': 'HELLO JSON'}
  } else {
    jsonObject = {'message': 'Hello json'}
  }

  res.send(jsonObject)
}

// routes

// app.get("/", rootCallback);
app.post("/", postCallBack);
app.delete("/", updateCallBack);
app.get("/index.html", serlveIndex);
app.get('/text', sendText)
app.get('/json', sendJson)

app.listen(8000);
