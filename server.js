const app = require("./app");
const config = require("./app/config");
const ContactService = require("./app/services/contact.service");
const MongoDB = require("./app/utils/mongodb.util");
const ApiError = require("./app/api-error");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}

startServer();

