var invert = require('invert-obj');

function UnderlyingStreamCommodityCurrency (underlyingStreamCommodityCurrency) {
  this.message = underlyingStreamCommodityCurrency;
}

UnderlyingStreamCommodityCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityCurrency.Tag = '41972';

UnderlyingStreamCommodityCurrency.Type = 'CURRENCY';

module.exports = UnderlyingStreamCommodityCurrency;