var invert = require('invert-obj');

function EncodedProvisionText (encodedProvisionText) {
  this.message = encodedProvisionText;
}

EncodedProvisionText.prototype.value = function () {
  return this.message;
};

EncodedProvisionText.Tag = '40987';

EncodedProvisionText.Type = 'DATA';

module.exports = EncodedProvisionText;