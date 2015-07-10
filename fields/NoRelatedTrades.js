var invert = require('invert-obj');

function NoRelatedTrades (noRelatedTrades) {
  this.message = noRelatedTrades;
}

NoRelatedTrades.prototype.value = function () {
  return this.message;
};

NoRelatedTrades.Tag = '1855';

NoRelatedTrades.Type = 'NUMINGROUP';

module.exports = NoRelatedTrades;