var invert = require('invert-obj');

function LegComplexOptPayoutUnderlier (legComplexOptPayoutUnderlier) {
  this.message = legComplexOptPayoutUnderlier;
}

LegComplexOptPayoutUnderlier.prototype.value = function () {
  return this.message;
};

LegComplexOptPayoutUnderlier.Tag = '2222';

LegComplexOptPayoutUnderlier.Type = 'STRING';

module.exports = LegComplexOptPayoutUnderlier;