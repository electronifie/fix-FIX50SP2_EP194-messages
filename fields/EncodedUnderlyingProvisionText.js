var invert = require('invert-obj');

function EncodedUnderlyingProvisionText (encodedUnderlyingProvisionText) {
  this.message = encodedUnderlyingProvisionText;
}

EncodedUnderlyingProvisionText.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingProvisionText.Tag = '42172';

EncodedUnderlyingProvisionText.Type = 'DATA';

module.exports = EncodedUnderlyingProvisionText;