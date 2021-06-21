const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')


router.get('/', auth, (req, res) => {
	console.log(res.locals.auth_data)
	return res.send({message: 'tudo ok com a raiz'})
})

router.post('/', (req, res) => {
	return res.send({message: 'essa informação é muito importante'})
})


module.exports = router
