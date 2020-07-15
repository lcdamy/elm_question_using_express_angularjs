let mongoose = require("mongoose");

let dburl = "mongodb://localhost:27017/lcdamy";

mongoose.connect(dburl);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dburl}`);
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose disconnected");
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error ${err}`);
});

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose disconnected through app termination.");
        process.exit(0);
    });
});

process.on("SIGTERM", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose disconnected through app termination.");
        process.exit(0);
    });
});

process.once("SIGUSR2", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose disconnected through app termination.");
        process.kill(process.pid,"SIGUSR2");
    });
});

require("./hotels.model.js");
