import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import * as config from './config';
import * as soap from 'soap';



const soapUrl : string = "https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService?wsdl";
const soapOptions : any = {};
soap.createClientAsync(soapUrl,soapOptions).then((client : soap.Client)=>{
    console.log(client.describe());
});

const app = express();

app.use(apiRouter());
//app.use(config.IS_PRODUCTION ? staticsRouter() : staticsDevRouter());
app.use(staticsRouter());

//app

var server = app.listen(/* config.SERVER_PORT*/ 3009, () => {
  console.log(`App listening on port 3009`);
  process.on('SIGINT', function() {
    console.log("3 not listening on port 3005 anymore")
    server.close();
  });
});

