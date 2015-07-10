var invert = require('invert-obj');

function LegComplexOptPayoutPercentage (legComplexOptPayoutPercentage) {
  this.message = legComplexOptPayoutPercentage;
}

LegComplexOptPayoutPercentage.prototype.value = function () {
  return this.message;
};

LegComplexOptPayoutPercentage.Tag = '2224';

LegComplexOptPayoutPercentage.Type = 'PERCENTAGE';

module.exports = LegComplexOptPayoutPercentage;