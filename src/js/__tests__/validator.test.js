import Validator from '../validator';

test('should be phone number', () => {

    expect((new Validator('8 (927) 000-00-00')).validatePhoneNumber()).toBe('+79270000000');
    expect((new Validator('+7 960 000 00 00')).validatePhoneNumber()).toBe('+79600000000');
    expect((new Validator('+86 000 000 0000')).validatePhoneNumber()).toBe('+860000000000');
})