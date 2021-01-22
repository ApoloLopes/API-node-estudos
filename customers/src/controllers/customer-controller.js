const neDB = require('../configurations/database')
const api = {}

api.findAll = (request, response) => {
    neDB.find({}).sort({ name: 1 }).exec((exception, customers) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de listar todos os customers!'
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.json(customers)
    })
}

api.save = (request, response) => {
    const canonical = request.body
    neDB.insert(canonical, (exception, customer) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de adicionar customer!'
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.status(201)
        response.json(customer)
    })
}

module.exports = api