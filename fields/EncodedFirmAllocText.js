var invert = require('invert-obj');

function EncodedFirmAllocText (encodedFirmAllocText) {
  this.message = encodedFirmAllocText;
}

EncodedFirmAllocText.prototype.value = function () {
  return this.message;
};

EncodedFirmAllocText.Tag = '1734';

EncodedFirmAllocText.Type = 'DATA';

module.exports = EncodedFirmAllocText;