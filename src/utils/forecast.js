const request = require('request')

const forecast = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=213973615b01053670e179f6e3ed4ef7&query=' + city

    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Weather service connection unavailable.', undefined)
        }
        else if (response.body.error) {
            callback('Location not found.', undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. Temperatura actual: ' + response.body.current.temperature + ' grados. Temperatura en el exterior: ' + response.body.current.feelslike + ' grados'
            )
        }
    })
}

module.exports = forecast