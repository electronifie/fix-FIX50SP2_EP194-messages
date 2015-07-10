var invert = require('invert-obj');

function NoSettlementAmounts (noSettlementAmounts) {
  this.message = noSettlementAmounts;
}

NoSettlementAmounts.prototype.value = function () {
  return this.message;
};

NoSettlementAmounts.Tag = '1700';

NoSettlementAmounts.Type = 'NUMINGROUP';

module.exports = NoSettlementAmounts;