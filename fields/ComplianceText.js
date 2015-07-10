var invert = require('invert-obj');

function ComplianceText (complianceText) {
  this.message = complianceText;
}

ComplianceText.prototype.value = function () {
  return this.message;
};

ComplianceText.Tag = '2404';

ComplianceText.Type = 'STRING';

module.exports = ComplianceText;