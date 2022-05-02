const express = require ('express')
const app = express ()
const morgan = require ('morgan')
const cors = require ('cors')
const apiRouter = require ('./apiRouter')


    


// Log do app
app.use (morgan ('common'))

app.set ('view engine', 'ejs')
app.set ('views','views')


app.use ('/site', express.static('site', {index: ['app.html', 'index.html']}))

app.use ('/app' , (req, res, next) => {
    res.status(200).render('index', {message: "Olá mundo"})
})

app.use ('/api', apiRouter)




app.use ((req, res) => {
    res.status (404).send ('Recurso não existente')
})

port = process.env.PORT || 3000
app.listen (port, () => {
    console.log (`servidor rodando em http://localhost:${port}`)
})