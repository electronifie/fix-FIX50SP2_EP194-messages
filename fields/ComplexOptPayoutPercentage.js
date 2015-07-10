var invert = require('invert-obj');

function ComplexOptPayoutPercentage (complexOptPayoutPercentage) {
  this.message = complexOptPayoutPercentage;
}

ComplexOptPayoutPercentage.prototype.value = function () {
  return this.message;
};

ComplexOptPayoutPercentage.Tag = '2120';

ComplexOptPayoutPercentage.Type = 'PERCENTAGE';

module.exports = ComplexOptPayoutPercentage;