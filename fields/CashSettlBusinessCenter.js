var invert = require('invert-obj');

function CashSettlBusinessCenter (cashSettlBusinessCenter) {
  this.message = cashSettlBusinessCenter;
}

CashSettlBusinessCenter.prototype.value = function () {
  return this.message;
};

CashSettlBusinessCenter.Tag = '40026';

CashSettlBusinessCenter.Type = 'STRING';

module.exports = CashSettlBusinessCenter;