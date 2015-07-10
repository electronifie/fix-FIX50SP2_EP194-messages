var invert = require('invert-obj');

function LegProvisionText (legProvisionText) {
  this.message = legProvisionText;
}

LegProvisionText.prototype.value = function () {
  return this.message;
};

LegProvisionText.Tag = '40472';

LegProvisionText.Type = 'STRING';

module.exports = LegProvisionText;