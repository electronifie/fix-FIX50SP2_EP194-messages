var invert = require('invert-obj');

function UnderlyingComplexOptPayoutPercentage (underlyingComplexOptPayoutPercentage) {
  this.message = underlyingComplexOptPayoutPercentage;
}

UnderlyingComplexOptPayoutPercentage.prototype.value = function () {
  return this.message;
};

UnderlyingComplexOptPayoutPercentage.Tag = '2264';

UnderlyingComplexOptPayoutPercentage.Type = 'PERCENTAGE';

module.exports = UnderlyingComplexOptPayoutPercentage;