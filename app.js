const express = require('express');

const app = express();

app.use((req,res,next)=> {
   console.log(req);
});

app.listen(3000);