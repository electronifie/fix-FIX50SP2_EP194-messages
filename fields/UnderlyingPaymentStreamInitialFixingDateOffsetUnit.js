var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialFixingDateOffsetUnit (underlyingPaymentStreamInitialFixingDateOffsetUnit) {
  this.message = underlyingPaymentStreamInitialFixingDateOffsetUnit;
}

UnderlyingPaymentStreamInitialFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialFixingDateOffsetUnit.Tag = '40602';

UnderlyingPaymentStreamInitialFixingDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamInitialFixingDateOffsetUnit;