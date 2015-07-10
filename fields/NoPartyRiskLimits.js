var invert = require('invert-obj');

function NoPartyRiskLimits (noPartyRiskLimits) {
  this.message = noPartyRiskLimits;
}

NoPartyRiskLimits.prototype.value = function () {
  return this.message;
};

NoPartyRiskLimits.Tag = '1677';

NoPartyRiskLimits.Type = 'NUMINGROUP';

module.exports = NoPartyRiskLimits;