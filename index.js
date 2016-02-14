var irc = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "chat",
        reconnect: true
    },
    channels: ["#rocketbeanstv"]
};

var client = new irc.client(options);

// Connect the client to the server..
client.connect();

client.on("chat", function (channel, user, message, self) {
    // Do your stuff.
    console.log(message);
});
