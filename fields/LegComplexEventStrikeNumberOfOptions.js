var invert = require('invert-obj');

function LegComplexEventStrikeNumberOfOptions (legComplexEventStrikeNumberOfOptions) {
  this.message = legComplexEventStrikeNumberOfOptions;
}

LegComplexEventStrikeNumberOfOptions.prototype.value = function () {
  return this.message;
};

LegComplexEventStrikeNumberOfOptions.Tag = '2241';

LegComplexEventStrikeNumberOfOptions.Type = 'INT';

module.exports = LegComplexEventStrikeNumberOfOptions;