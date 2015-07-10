var invert = require('invert-obj');

function IntraFirmTradeIndicator (intraFirmTradeIndicator) {
  this.message = intraFirmTradeIndicator;
}

IntraFirmTradeIndicator.prototype.value = function () {
  return this.message;
};

IntraFirmTradeIndicator.Tag = '2373';

IntraFirmTradeIndicator.Type = 'BOOLEAN';

module.exports = IntraFirmTradeIndicator;