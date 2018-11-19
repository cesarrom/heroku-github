"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_router_1 = require("./routes/api-router");
const statics_router_1 = require("./routes/statics-router");
const config = require("./config");
const soap = require("soap");
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
var server = app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on port ${config.SERVER_PORT}`);
    process.on('SIGINT', function () {
        console.log(`NOT LISTENING AT PORT ${config.SERVER_PORT} ANYMORE`);
        server.close();
    });
});
//# sourceMappingURL=server.js.map