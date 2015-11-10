var invert = require('invert-obj');

function ConfirmationMethod (confirmationMethod) {
  this.message = confirmationMethod;
}

ConfirmationMethod.prototype.value = function () {
  return this.message;
};


ConfirmationMethod.Keys = {
  'NON_ELECTRONIC': '0',
  'ELECTRONIC': '1',
  'UNCONFIRMED': '2',
};

ConfirmationMethod.Tag = '1927';

ConfirmationMethod.Type = 'INT';

ConfirmationMethod.Values = invert(ConfirmationMethod.Keys);

module.exports = ConfirmationMethod;