let mongoose = require("mongoose");
let userModel = require("./user.model");

function searchEvents(searchTerm) {
    return new Promise((resolve, reject) => {
        userModel.find({ "eventName": { "$regex": searchTerm, "$options": "i" } }, (err, events) => {
            if (err) {
                reject(err);
            } else {
                resolve(events);
            }
        });
    });
}

module.exports = {searchEvents};