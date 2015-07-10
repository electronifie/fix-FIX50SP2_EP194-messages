var invert = require('invert-obj');

function LegCashSettlBusinessCenter (legCashSettlBusinessCenter) {
  this.message = legCashSettlBusinessCenter;
}

LegCashSettlBusinessCenter.prototype.value = function () {
  return this.message;
};

LegCashSettlBusinessCenter.Tag = '41350';

LegCashSettlBusinessCenter.Type = 'STRING';

module.exports = LegCashSettlBusinessCenter;