var invert = require('invert-obj');

function EncodedComplianceText (encodedComplianceText) {
  this.message = encodedComplianceText;
}

EncodedComplianceText.prototype.value = function () {
  return this.message;
};

EncodedComplianceText.Tag = '2352';

EncodedComplianceText.Type = 'DATA';

module.exports = EncodedComplianceText;