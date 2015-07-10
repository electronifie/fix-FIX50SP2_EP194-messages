var invert = require('invert-obj');

function StreamCurrency (streamCurrency) {
  this.message = streamCurrency;
}

StreamCurrency.prototype.value = function () {
  return this.message;
};

StreamCurrency.Tag = '40055';

StreamCurrency.Type = 'CURRENCY';

module.exports = StreamCurrency;