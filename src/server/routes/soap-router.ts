import * as soap from 'soap';

const soapUrl : string = "https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService?wsdl";
const soapOptions : any = {};
const soapBilder = soap.createClientAsync(soapUrl,soapOptions);


export default soapBilder;