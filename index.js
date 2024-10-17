const express = require ('express')

// Crea uns aplicacion de express
const app = express();
app.get('/', (req, res)=>{
    res.send('Welcome to wolrd Nodejs')
});

app.listen(3000, ()=>{
    console.log('listening on port 3000 En https://localhost:3000')
});