var invert = require('invert-obj');

function UnderlyingStreamCurrency (underlyingStreamCurrency) {
  this.message = underlyingStreamCurrency;
}

UnderlyingStreamCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCurrency.Tag = '40546';

UnderlyingStreamCurrency.Type = 'CURRENCY';

module.exports = UnderlyingStreamCurrency;