var invert = require('invert-obj');

function UnderlyingPaymentStreamFutureValueNotional (underlyingPaymentStreamFutureValueNotional) {
  this.message = underlyingPaymentStreamFutureValueNotional;
}

UnderlyingPaymentStreamFutureValueNotional.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFutureValueNotional.Tag = '40618';

UnderlyingPaymentStreamFutureValueNotional.Type = 'AMT';

module.exports = UnderlyingPaymentStreamFutureValueNotional;