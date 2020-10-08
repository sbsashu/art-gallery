import cookie from 'react-cookies';
import base64 from 'base-64';
import { BASE_URL } from 'config/constants';
import moment from 'moment-timezone';
var hasOwnProperty = Object.prototype.hasOwnProperty;

export function isEmpty(obj) {
    if (obj == "") return true;
    if (obj === 0) return true;
    if (obj === "0") return true;
    if (obj == null) return true;
    if (obj === false) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof(obj)=="undefined")  return true;
    //if (typeof obj !== "object") return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
}

export function isEmptyObj(obj) {
	for (var prop in obj) {
		if(obj.hasOwnProperty(prop)) {
			return false;
		}
	}
	return true;
}

export function saveCookie( key,value ) {
	//const expires = new Date(moment().format());
	//key 		= base64.encode(key);
	value 	= base64.encode(value);
   //expires.setDate(Date.now() + 1000 * 60 * 60 * 24)
	cookie.save(
		key,
		value,
		//expires,
		{
			path: '/',
			httpOnly:false,
			SameSite:'none',
			secure: false,
		}
	)
}

export function removeCookie( key ) {
	//key 		= base64.encode(key);
	cookie.remove(
		key, 
		{ 
			path: '/',
			httpOnly:false,
			SameSite:'none',
			secure: false,
		}
	)
}

export function getCookie( key ) {
	//key 			= base64.encode(key);
	let value	= cookie.load(key);
	if(!isEmpty(value)){
		value = base64.decode(value);
	}
	return value;
}

export function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth()+ 1;
  var year = date.getFullYear();

  month = (month.toString().length == "1" ? "0"+month : month)  
  day = (day.toString().length == "1" ? "0"+day : day)  

  return year + '-' + month + '-' + day;
}
