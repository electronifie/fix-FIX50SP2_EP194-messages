var invert = require('invert-obj');

function EncodedLegProvisionText (encodedLegProvisionText) {
  this.message = encodedLegProvisionText;
}

EncodedLegProvisionText.prototype.value = function () {
  return this.message;
};

EncodedLegProvisionText.Tag = '40981';

EncodedLegProvisionText.Type = 'DATA';

module.exports = EncodedLegProvisionText;