const redis = require("redis");
const client = redis.createClient({
    port: 6379,
    host: '127.0.0.1'
});


client.on('connect', function () {
    console.log('Redis client connected');
});

client.on("error", error => {
    console.error(error);
});

// SET
client.set("username", "EMRE", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Message", message);
});

// Append
client.append("username", " KOKCU", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Append", message);
});

// GET
client.get("username", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("message", message);
});

// Exist
client.exists("username", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Exists", message);
});

// Del
client.del("username", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Delete", message);
});