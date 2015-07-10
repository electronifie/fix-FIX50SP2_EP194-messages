var invert = require('invert-obj');

function LegComplexOptPayoutPaySide (legComplexOptPayoutPaySide) {
  this.message = legComplexOptPayoutPaySide;
}

LegComplexOptPayoutPaySide.prototype.value = function () {
  return this.message;
};

LegComplexOptPayoutPaySide.Tag = '2220';

LegComplexOptPayoutPaySide.Type = 'INT';

module.exports = LegComplexOptPayoutPaySide;