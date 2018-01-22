/*global module:true, postMessage:false, onmessage:true*/

module = {};
var QrCode = require('qrcode-reader').default;
var qr = new QrCode();
qr.callback = function(result, err){
	console.log("calling Worker.callback");
	postMessage({result: result, err: err});
	console.log("end calling Worker.callback");
};
onmessage = function(event){
	console.log("calling Worker.onmessage");
	var imageData = event.data;
	console.log("middle calling Worker.onmessage");
  qr.decode(imageData);
  console.log("end calling Worker.onmessage");
};
