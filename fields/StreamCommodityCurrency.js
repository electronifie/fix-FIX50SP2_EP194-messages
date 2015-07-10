var invert = require('invert-obj');

function StreamCommodityCurrency (streamCommodityCurrency) {
  this.message = streamCommodityCurrency;
}

StreamCommodityCurrency.prototype.value = function () {
  return this.message;
};

StreamCommodityCurrency.Tag = '41259';

StreamCommodityCurrency.Type = 'CURRENCY';

module.exports = StreamCommodityCurrency;