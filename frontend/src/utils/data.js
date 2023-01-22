let mongoose = require("mongoose");
let eventModel = require("./event.model");

function searchEvents(searchTerm) {
    return new Promise((resolve, reject) => {
        eventModel.find({ "name": { "$regex": searchTerm, "$options": "i" } }, (err, events) => {
            if (err) {
                reject(err);
            } else {
                resolve(events);
            }
        });
    });
}

module.exports = {searchEvents};