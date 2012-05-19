/*************************************************************
 * This script is developed by Arturs Sosins aka ar2rsawseen, http://webcodingeasy.com
 * Feel free to distribute and modify code, but keep reference to its creator
 *
 * QR code class can be used to generate QR Code images using Google Chart API.
 *
 * For more information, examples and online documentation visit: 
 * http://webcodingeasy.com/JS-classes/Generate-QR-codes-using-javascript
**************************************************************/
var qrcode = function(config) {
	var ob = this;
	this.conf = {
		/***************************************
		* Size of QRcode in pixels
		* As QRcode is a square, only one value is needed
		****************************************/
		size: 150,
		/***************************************
		* Error correction level for damaged or misinterpretted codes
		* Lower - more data stored, but less errors could be corrected
		* High - less data can be stord, more information can be recovered
		* Possible types of error collection:
		* L - [Default] Allows recovery of up to 7% data loss
		* M - Allows recovery of up to 15% data loss
		* Q - Allows recovery of up to 25% data loss
		* H - Allows recovery of up to 30% data loss
		****************************************/
		ec_level: "L",
		/***************************************
		* Margin - white space around QRcode in
		* QRcode columns and rows, no pixels
		****************************************/
		margin: 1
	};
	
	this.construct = function(){
		for(var opt in config){
			this.conf[opt]= config[opt];
		}
	};
	
	this.text = function(id, text){
		get_image(id, text);
	};
	
	this.link = function(id, url){
		if(url.substr(0,4) == "http")
		{
			get_image(id, url);
		}
		else
		{
			get_image(id, "http://" + url);
		}
	};
	
	this.bookmark = function(id, title, url){
		get_image(id, "MEBKM:TITLE:" + title + ";URL:" + url + ";;");
	};
	
	this.sms = function(id, phone, text){
		get_image(id, "SMSTO:" + phone + ":" + text);
	};
	
	this.phone_number = function(id, phone){
		get_image(id, "TEL:" + phone);
	};
	
	this.contact_info = function(id, name, address, phone, email){
		get_image(id, "MECARD:N:" + name + ";ADR:" + address + ";TEL:" + phone + ";EMAIL:" + email + ";;");
	};
	
	this.email = function(id, email, subject, message){
		get_image(id, "MATMSG:TO:" + email + ";SUB:" + subject + ";BODY:" + message + ";;");
	};
	
	this.geo = function(id, lat, lon, height){
		get_image(id, "GEO:" + lat + "," + lon + "," + height);
	};
	
	this.wifi = function(id, type, ssid, pass){
		get_image(id, "WIFI:T:" + type + ";S" + ssid + ";" + pass + ";;");
	};
		
	var get_image = function(id, data){
		var elem = document.getElementById(id);
		//create image
		var img = document.createElement('img');
		img.style.borderStyle = "none";
		img.src = "http://chart.apis.google.com/chart?chs=" + ob.conf.size + "x" + ob.conf.size + "&cht=qr&chld=" + ob.conf.ec_level + "|" + ob.conf.margin + "&chl=" + data;
		elem.appendChild(img);
	};
	
	this.construct();
}