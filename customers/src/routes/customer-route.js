const api = require('../controllers/customer-controller')

module.exports = (app) => {
    app.route('/customers')
        .get(api.findAll)
        .post(api.save)

}