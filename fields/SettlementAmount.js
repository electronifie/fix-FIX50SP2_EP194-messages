var invert = require('invert-obj');

function SettlementAmount (settlementAmount) {
  this.message = settlementAmount;
}

SettlementAmount.prototype.value = function () {
  return this.message;
};

SettlementAmount.Tag = '1701';

SettlementAmount.Type = 'AMT';

module.exports = SettlementAmount;