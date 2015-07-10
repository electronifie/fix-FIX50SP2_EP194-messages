var invert = require('invert-obj');

function EncodedFirmAllocTextLen (encodedFirmAllocTextLen) {
  this.message = encodedFirmAllocTextLen;
}

EncodedFirmAllocTextLen.prototype.value = function () {
  return this.message;
};

EncodedFirmAllocTextLen.Tag = '1733';

EncodedFirmAllocTextLen.Type = 'LENGTH';

module.exports = EncodedFirmAllocTextLen;