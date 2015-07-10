var invert = require('invert-obj');

function EncodedWarningText (encodedWarningText) {
  this.message = encodedWarningText;
}

EncodedWarningText.prototype.value = function () {
  return this.message;
};

EncodedWarningText.Tag = '2521';

EncodedWarningText.Type = 'DATA';

module.exports = EncodedWarningText;