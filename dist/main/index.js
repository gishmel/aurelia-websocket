"use strict";
var websocket_client_1 = require("./websocket-client");
exports.WebsocketClient = websocket_client_1.WebsocketClient;
function configure(frameworkConfiguration, pluginConfiguration) {
    var instance = frameworkConfiguration.container.get(websocket_client_1.WebsocketClient);
    return pluginConfiguration(instance);
}
exports.configure = configure;
