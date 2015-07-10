var invert = require('invert-obj');

function LegSettlType (legSettlType) {
  this.message = legSettlType;
}

LegSettlType.prototype.value = function () {
  return this.message;
};

LegSettlType.Tag = '587';

LegSettlType.Type = 'STRING';

module.exports = LegSettlType;