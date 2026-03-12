require("dotenv").config();
const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/tests?authSource=mongoose_orm`,
        );
    } catch ( err ) {
        console.error("Error connecting to mongodb");
        console.error(err);
    }
}

module.exports = { connect };