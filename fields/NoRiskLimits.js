var invert = require('invert-obj');

function NoRiskLimits (noRiskLimits) {
  this.message = noRiskLimits;
}

NoRiskLimits.prototype.value = function () {
  return this.message;
};

NoRiskLimits.Tag = '1669';

NoRiskLimits.Type = 'NUMINGROUP';

module.exports = NoRiskLimits;