var invert = require('invert-obj');

function LegCashSettlBusinessDays (legCashSettlBusinessDays) {
  this.message = legCashSettlBusinessDays;
}

LegCashSettlBusinessDays.prototype.value = function () {
  return this.message;
};

LegCashSettlBusinessDays.Tag = '41356';

LegCashSettlBusinessDays.Type = 'INT';

module.exports = LegCashSettlBusinessDays;