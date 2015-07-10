var invert = require('invert-obj');

function UnderlyingCashSettlBusinessCenter (underlyingCashSettlBusinessCenter) {
  this.message = underlyingCashSettlBusinessCenter;
}

UnderlyingCashSettlBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlBusinessCenter.Tag = '42047';

UnderlyingCashSettlBusinessCenter.Type = 'STRING';

module.exports = UnderlyingCashSettlBusinessCenter;