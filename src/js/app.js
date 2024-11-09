import Validator from './validator';

console.log((new Validator('8 (927) 000-00-00')).validatePhoneNumber());
console.log((new Validator('+7 960 000 00 00')).validatePhoneNumber());
console.log((new Validator('+86 000 000 0000')).validatePhoneNumber());