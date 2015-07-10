var invert = require('invert-obj');

function TradeVersion (tradeVersion) {
  this.message = tradeVersion;
}

TradeVersion.prototype.value = function () {
  return this.message;
};

TradeVersion.Tag = '2302';

TradeVersion.Type = 'STRING';

module.exports = TradeVersion;