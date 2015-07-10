var invert = require('invert-obj');

function SettlRateFallbackRateSource (settlRateFallbackRateSource) {
  this.message = settlRateFallbackRateSource;
}

SettlRateFallbackRateSource.prototype.value = function () {
  return this.message;
};

SettlRateFallbackRateSource.Tag = '40373';

SettlRateFallbackRateSource.Type = 'INT';

module.exports = SettlRateFallbackRateSource;