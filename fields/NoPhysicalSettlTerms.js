var invert = require('invert-obj');

function NoPhysicalSettlTerms (noPhysicalSettlTerms) {
  this.message = noPhysicalSettlTerms;
}

NoPhysicalSettlTerms.prototype.value = function () {
  return this.message;
};

NoPhysicalSettlTerms.Tag = '40204';

NoPhysicalSettlTerms.Type = 'NUMINGROUP';

module.exports = NoPhysicalSettlTerms;