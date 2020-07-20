//node/express

//Routes
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const apiKey = "";

const PORT = process.env.PORT || 4000

//Pars saying url information
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get('/', function(req, res){
})

app.post('/', function(req, res){
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})