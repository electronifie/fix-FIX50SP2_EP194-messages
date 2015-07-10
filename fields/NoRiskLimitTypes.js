var invert = require('invert-obj');

function NoRiskLimitTypes (noRiskLimitTypes) {
  this.message = noRiskLimitTypes;
}

NoRiskLimitTypes.prototype.value = function () {
  return this.message;
};

NoRiskLimitTypes.Tag = '1529';

NoRiskLimitTypes.Type = 'NUMINGROUP';

module.exports = NoRiskLimitTypes;