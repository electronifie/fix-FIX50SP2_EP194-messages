var invert = require('invert-obj');

function LegComplexOptPayoutReceiveSide (legComplexOptPayoutReceiveSide) {
  this.message = legComplexOptPayoutReceiveSide;
}

LegComplexOptPayoutReceiveSide.prototype.value = function () {
  return this.message;
};

LegComplexOptPayoutReceiveSide.Tag = '2221';

LegComplexOptPayoutReceiveSide.Type = 'INT';

module.exports = LegComplexOptPayoutReceiveSide;