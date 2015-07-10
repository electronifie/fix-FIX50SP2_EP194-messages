var invert = require('invert-obj');

function LegStreamCommodityCurrency (legStreamCommodityCurrency) {
  this.message = legStreamCommodityCurrency;
}

LegStreamCommodityCurrency.prototype.value = function () {
  return this.message;
};

LegStreamCommodityCurrency.Tag = '41656';

LegStreamCommodityCurrency.Type = 'CURRENCY';

module.exports = LegStreamCommodityCurrency;