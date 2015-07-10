var invert = require('invert-obj');

function CashSettlBusinessDays (cashSettlBusinessDays) {
  this.message = cashSettlBusinessDays;
}

CashSettlBusinessDays.prototype.value = function () {
  return this.message;
};

CashSettlBusinessDays.Tag = '40033';

CashSettlBusinessDays.Type = 'INT';

module.exports = CashSettlBusinessDays;