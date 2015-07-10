var invert = require('invert-obj');

function NoRequestedRiskLimitType (noRequestedRiskLimitType) {
  this.message = noRequestedRiskLimitType;
}

NoRequestedRiskLimitType.prototype.value = function () {
  return this.message;
};

NoRequestedRiskLimitType.Tag = '1668';

NoRequestedRiskLimitType.Type = 'NUMINGROUP';

module.exports = NoRequestedRiskLimitType;