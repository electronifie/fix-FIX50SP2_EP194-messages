var invert = require('invert-obj');

function SettlRateIndex (settlRateIndex) {
  this.message = settlRateIndex;
}

SettlRateIndex.prototype.value = function () {
  return this.message;
};

SettlRateIndex.Tag = '1577';

SettlRateIndex.Type = 'STRING';

module.exports = SettlRateIndex;