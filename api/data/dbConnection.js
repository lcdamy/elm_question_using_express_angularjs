let MongoClient = require("mongodb").MongoClient;
let dburl = "mongodb://localhost:27017/lcdamy";

let _connection = null;

let open = function () {
    MongoClient.connect(dburl, (err, db) => {
        if (err) {
            console.log("db connection failed");
            return;
        }
        _connection = db;
        console.log("db connection, " + _connection);
    });
};

let get = function () {
    return _connection;
}

module.exports = {
    _open: open,
    _get: get
};