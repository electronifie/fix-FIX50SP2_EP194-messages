var invert = require('invert-obj');

function NoTargetMarketSegments (noTargetMarketSegments) {
  this.message = noTargetMarketSegments;
}

NoTargetMarketSegments.prototype.value = function () {
  return this.message;
};

NoTargetMarketSegments.Tag = '1789';

NoTargetMarketSegments.Type = 'NUMINGROUP';

module.exports = NoTargetMarketSegments;