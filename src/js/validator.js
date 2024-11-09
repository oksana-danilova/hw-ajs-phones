export default class Validator {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    validatePhoneNumber() {
        let correctedPhoneNumber = this.phoneNumber.replace(/(\D)/gm, '');
        if (correctedPhoneNumber.length === 11) {
            correctedPhoneNumber = '+' + correctedPhoneNumber.replace(/^8/gm, '7');
        } else {
            correctedPhoneNumber = '+' + correctedPhoneNumber;
        }
        return correctedPhoneNumber;
    }

}