var invert = require('invert-obj');

function SettlRateIndexLocation (settlRateIndexLocation) {
  this.message = settlRateIndexLocation;
}

SettlRateIndexLocation.prototype.value = function () {
  return this.message;
};

SettlRateIndexLocation.Tag = '1580';

SettlRateIndexLocation.Type = 'STRING';

module.exports = SettlRateIndexLocation;