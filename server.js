const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

var corOption = {
    origin: 'http://localhost:4200'
}

const produitRouter = require('./router/produitRouter.js')
const categorieRouter = require('./router/categorieRouter.js')
const panierRouter = require('./router/panierRouter.js')
const clientRouter = require('./router/clientRouter.js')
const commandeRouter = require('./router/commandeRouter.js')


//midelware
app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing api

app.get('/', (req, res) => {
    res.send('Hi There')
})




//Routes

app.use('/produit', produitRouter)
app.use('/categorie', categorieRouter)
app.use('/panier', panierRouter)
app.use('/client', clientRouter)
app.use('/commande', commandeRouter)




app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})