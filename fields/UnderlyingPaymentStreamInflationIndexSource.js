var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationIndexSource (underlyingPaymentStreamInflationIndexSource) {
  this.message = underlyingPaymentStreamInflationIndexSource;
}

UnderlyingPaymentStreamInflationIndexSource.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationIndexSource.Tag = '40643';

UnderlyingPaymentStreamInflationIndexSource.Type = 'INT';

module.exports = UnderlyingPaymentStreamInflationIndexSource;