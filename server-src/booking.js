const backend = require('./index');

exports.getSuggestions = (req, res, next) => {

  backend.proxy.get(`/api/booking/suggestions/${req.params.themes}`)
    .then(data => console.log(data))
    .catch((error) => next(error));
};


exports.createGift = (req, res, next) => {

    backend.proxy.post(`createGift`, {
        "receiverEmail" : "martina.bicanic@gmail.com",
        "senderEmail" : "test@example.com",
        "amount" : 100,
        "senderName" : "mickey",
        "senderLastName" : "mouse"
    })
        .then(data => console.log('data', data))
        .catch((error) => next(error));
};