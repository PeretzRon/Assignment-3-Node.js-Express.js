const express = require('express');
const path = require('path');

const app = express();
const routers = require('./routes/users')

app.use(express.static(path.join(__dirname, 'public')));
app.use(routers);
app.use((req, res, next)=> {
   res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);