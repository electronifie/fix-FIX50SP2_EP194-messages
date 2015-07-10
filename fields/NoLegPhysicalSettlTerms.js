var invert = require('invert-obj');

function NoLegPhysicalSettlTerms (noLegPhysicalSettlTerms) {
  this.message = noLegPhysicalSettlTerms;
}

NoLegPhysicalSettlTerms.prototype.value = function () {
  return this.message;
};

NoLegPhysicalSettlTerms.Tag = '41599';

NoLegPhysicalSettlTerms.Type = 'NUMINGROUP';

module.exports = NoLegPhysicalSettlTerms;