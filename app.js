const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/config')

const url = config.bd_string
const options = {
	poolSize: 5,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	}

mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)
mongoose.connection.on('error', (err) => {
	console.log('Erro na conexão com o Banco de Dados', err)
})
mongoose.connection.on('disconnected', () => {
	console.log('Aplicação desconectada banco')
})
mongoose.connection.on('connected', () => {
	console.log('Aplicação conectado ao banco de dados')
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const indexRoute = require('./Routes/index')
const usersRoute = require('./Routes/users')

app.use('/', indexRoute )
app.use('/users', usersRoute )


app.listen(3000, () => {
	console.log( 'Ouvindo na porta 3000' )
})
