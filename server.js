const express = require ('express');
const app = express ();

app.get('/',(req,res) => res.json ("API works"));


const PORT = process.env.PORT ||  5000;
app.listen(PORT, () => console.log(`Server is runnning on port ${PORT}`));