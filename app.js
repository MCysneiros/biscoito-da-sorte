let app = require("./config/server");
let sortes = require("./mockup");
let geradorSortes = require("./sortes");
// let eventHandler = require('./views/events')
// eventHandler()

geradorSortes(sortes);

//app.use(express.static('public'))

app.get("/", (req, res) => {
  let randomNumber = Math.floor(Math.random() * 362);
  
  res.render('index',{sorte:sortes[randomNumber]})
  // res.send(sortes[randomNumber]);
});
app.listen(3000, function () {
  console.log("Servidor rodando com express");
  console.log("Pressione CTRL+C para encerrar");
});

