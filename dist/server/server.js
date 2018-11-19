"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_router_1 = require("./routes/api-router");
const statics_router_1 = require("./routes/statics-router");
const soap = require("soap");
const localtunnel = require('localtunnel');
const soapUrl = "https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService?wsdl";
const soapOptions = {};
soap.createClientAsync(soapUrl, soapOptions).then((client) => {
    console.log(client.describe());
});
const app = express();
app.use(api_router_1.apiRouter());
//app.use(config.IS_PRODUCTION ? staticsRouter() : staticsDevRouter());
app.use(statics_router_1.staticsRouter());
//app
app.listen(/* config.SERVER_PORT*/ 3009, () => {
    console.log(`App listening on port 3009`);
    const tunnel = localtunnel(3009, { "subdomain": "pandora-technologies" }, function (err, tunel) {
        console.log(err, tunnel);
    });
    tunnel.on('close', function () {
        // When the tunnel is closed
    });
    process.on('SIGINT', function () {
        console.log("3 not listening on port 3005 anymore");
        tunnel.close();
    });
});
//# sourceMappingURL=server.js.map