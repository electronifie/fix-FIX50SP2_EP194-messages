var invert = require('invert-obj');

function UnderlyingPaymentStreamSettlLevel (underlyingPaymentStreamSettlLevel) {
  this.message = underlyingPaymentStreamSettlLevel;
}

UnderlyingPaymentStreamSettlLevel.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamSettlLevel.Tag = '41916';

UnderlyingPaymentStreamSettlLevel.Type = 'INT';

module.exports = UnderlyingPaymentStreamSettlLevel;