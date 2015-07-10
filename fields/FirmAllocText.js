var invert = require('invert-obj');

function FirmAllocText (firmAllocText) {
  this.message = firmAllocText;
}

FirmAllocText.prototype.value = function () {
  return this.message;
};

FirmAllocText.Tag = '1732';

FirmAllocText.Type = 'STRING';

module.exports = FirmAllocText;