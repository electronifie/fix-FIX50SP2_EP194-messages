var invert = require('invert-obj');

function UnderlyingCashSettlBusinessDays (underlyingCashSettlBusinessDays) {
  this.message = underlyingCashSettlBusinessDays;
}

UnderlyingCashSettlBusinessDays.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlBusinessDays.Tag = '42053';

UnderlyingCashSettlBusinessDays.Type = 'INT';

module.exports = UnderlyingCashSettlBusinessDays;