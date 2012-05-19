/*************************************************************
 * This script is developed by Arturs Sosins aka ar2rsawseen, http://webcodingeasy.com
 * Feel free to distribute and modify code, but keep reference to its creator
 *
 * QR code class can be used to generate QR Code images using Google Chart API.
 *
 * For more information, examples and online documentation visit: 
 * http://webcodingeasy.com/JS-classes/Generate-QR-codes-using-javascript
 *
 * Examples:
 * jQuery(function(){
 *     $('#tabs').tabs();
 *     var qr = new qrcode({
 *         size: 150, //图片像素
 *         ec_level: "L", // 错误纠正等级 L - 修复率为 7% M - 修复率为 15% Q - 修复率为 25% H - 修复率为 30%
 *         margin: 1
 *     });
 *     //id of container, text string
 *     qr.text("text_div", "Some textaaa发达范德萨");
 *     //id of container, link
 *     qr.link("link_div", "http://webcodingeasy.com/");
 *     //id of container, title of bookmark, link
 *     qr.bookmark("bookmark_div", "WebcodingEasy", "http://webcodingeasy.com/");
 *     //id of container, phone number, sms text
 *     qr.sms("sms_div", "12345678", "Some text");
 *     //id of container, phone number
 *     qr.phone_number("phone_number_div", "12345678");
 *     //id of container, firstname and lastname, address, phone, email
 *     qr.contact_info("contact_info_div", "Arturs Sosins", "Stadiona street 15", "12345678", "ar2rsawseen@yahoo.com");
 *     //id of container, email address, subject, email message
 *     qr.email("email_div", "ar2rsawseen@yahoo.com", "Email subject", "Email message");
 *     //id of container, authentication type, ssid, password
 *     qr.wifi("wifi_div", "WPA", "Network name", "net_password");
 * });
 *
 * <p>Simple text</p>
 * <div id='text_div'></div>
 * <p>Link</p>
 * <div id='link_div'></div>
 * <p>Bookmark</p>
 * <div id='bookmark_div'></div>
 * <p>SMS</p>
 * <div id='sms_div'></div>
 * <p>Phone number</p>
 * <div id='phone_number_div'></div>
 * <p>Contact info</p>
 * <div id='contact_info_div'></div>
 * <p>Email</p>
 * <div id='email_div'></div>
 * <p>Geolocation</p>
 * <div id='geo_div'></div>
 * <p>Wifi network</p>
 * <div id='wifi_div'></div>
**************************************************************/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 n=3(f){5 g=2;2.6={8:u,9:"L",m:1};2.k=3(){y(5 a F f){2.6[a]=f[a]}};2.J=3(a,b){h(a,b)};2.p=3(a,b){D(b.v(0,4)=="7"){h(a,b)}V{h(a,"7://"+b)}};2.s=3(a,b,c){h(a,"H:R:"+b+";A:"+c+";;")};2.X=3(a,b,c){h(a,"O:"+b+":"+c)};2.Z=3(a,b){h(a,"i:"+b)};2.o=3(a,b,c,d,e){h(a,"r:N:"+b+";z:"+c+";i:"+d+";C:"+e+";;")};2.G=3(a,b,c,d){h(a,"K:P:"+b+";U:"+c+";Y:"+d+";;")};2.11=3(a,b,c,d){h(a,"13:"+b+","+c+","+d)};2.14=3(a,b,c,d){h(a,"16:T:"+b+";S"+c+";"+d+";;")};5 h=3(a,b){5 c=j.q(a);5 d=j.w(\'E\');d.t.I="B";d.M="7://l.Q.W.10/l?12="+g.6.8+"x"+g.6.8+"&15=17&18="+g.6.9+"|"+g.6.m+"&19="+b;c.1a(d)};2.k()}',62,73,'||this|function||var|conf|http|size|ec_level|||||||||TEL|document|construct|chart|margin|qrcode|contact_info|link|getElementById|MECARD|bookmark|style|150|substr|createElement||for|ADR|URL|none|EMAIL|if|img|in|email|MEBKM|borderStyle|text|MATMSG||src||SMSTO|TO|apis|TITLE|||SUB|else|google|sms|BODY|phone_number|com|geo|chs|GEO|wifi|cht|WIFI|qr|chld|chl|appendChild'.split('|'),0,{}))
