var invert = require('invert-obj');

function NoUnderlyingPhysicalSettlTerms (noUnderlyingPhysicalSettlTerms) {
  this.message = noUnderlyingPhysicalSettlTerms;
}

NoUnderlyingPhysicalSettlTerms.prototype.value = function () {
  return this.message;
};

NoUnderlyingPhysicalSettlTerms.Tag = '42060';

NoUnderlyingPhysicalSettlTerms.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPhysicalSettlTerms;