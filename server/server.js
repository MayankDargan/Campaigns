let express = require('express');
let app = express();
let fs = require('fs');
let cors = require('cors');

app.use(cors());

app.listen('8001', function(){
    console.log("Server is listening to 8001 with cors enabled");
});
