var invert = require('invert-obj');

function MarginAmountMarketID (marginAmountMarketId) {
  this.message = marginAmountMarketId;
}

MarginAmountMarketID.prototype.value = function () {
  return this.message;
};

MarginAmountMarketID.Tag = '1715';

MarginAmountMarketID.Type = 'STRING';

module.exports = MarginAmountMarketID;