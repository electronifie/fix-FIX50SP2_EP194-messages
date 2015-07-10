var invert = require('invert-obj');

function UnderlyingPaymentStreamFRADiscounting (underlyingPaymentStreamFradiscounting) {
  this.message = underlyingPaymentStreamFradiscounting;
}

UnderlyingPaymentStreamFRADiscounting.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFRADiscounting.Tag = '40647';

UnderlyingPaymentStreamFRADiscounting.Type = 'INT';

module.exports = UnderlyingPaymentStreamFRADiscounting;