var invert = require('invert-obj');

function FirmMnemonic (firmMnemonic) {
  this.message = firmMnemonic;
}

FirmMnemonic.prototype.value = function () {
  return this.message;
};

FirmMnemonic.Tag = '1729';

FirmMnemonic.Type = 'STRING';

module.exports = FirmMnemonic;