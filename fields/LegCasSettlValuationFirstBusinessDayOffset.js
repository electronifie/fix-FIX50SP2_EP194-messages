var invert = require('invert-obj');

function LegCasSettlValuationFirstBusinessDayOffset (legCasSettlValuationFirstBusinessDayOffset) {
  this.message = legCasSettlValuationFirstBusinessDayOffset;
}

LegCasSettlValuationFirstBusinessDayOffset.prototype.value = function () {
  return this.message;
};

LegCasSettlValuationFirstBusinessDayOffset.Tag = '41346';

LegCasSettlValuationFirstBusinessDayOffset.Type = 'INT';

module.exports = LegCasSettlValuationFirstBusinessDayOffset;